import { NextFunction, Request, Response } from "express";

export const validatePostCreationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { image_url } = req.body;

  if (!image_url) {
    return res
      .status(400)
      .json({ ok: false, message: "image_url is required" });
  }

  next();
};
