import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../services/database/data-source";
import { User } from "../../modules/users/entities/user.entity";

export async function validateJwtUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"]?.split(" ")[1];

  try {
    if (!token) return res.status(401).json({ message: "No Token Provided" });

    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: number;
    };

    const { id } = jwtPayload;

    const user = await AppDataSource.getRepository(User).findOne({
      where: { id },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    res.locals.user = user;

    next();
  } catch (error) {
    console.log(error, "Error On ValidateJwtUser");
    return res.status(401).json({ message: "Not Possible To Authenticate" });
  }
}
