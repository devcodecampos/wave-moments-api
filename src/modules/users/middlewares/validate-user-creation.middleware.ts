import { NextFunction, Request, Response } from "express";

export const validateUserCreationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({ ok: false, message: "Name is required" });
  }

  if (!email) {
    return res.status(400).json({ ok: false, message: "Email is required" });
  }

  if (!password) {
    return res.status(400).json({ ok: false, message: "Password is required" });
  }

  next();
};