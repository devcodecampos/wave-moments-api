import { NextFunction, Request, Response } from "express";

export const validateAuthTokenCreationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ ok: false, message: "Email is required" });
  }

  if (!password) {
    return res.status(400).json({ ok: false, message: "Password is required" });
  }

  next();
};
