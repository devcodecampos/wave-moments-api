import { Router } from "express";
import { validateJwtUser } from "../../../commons/middlewares/validate-user-auth.middleware";
import LikeController from "../controllers/like.controller";

export const LikeRoutes = (): Router => {
  const router = Router();

  // POST /likes/:post_id/create
  router.post("/:post_id/create", validateJwtUser, LikeController.handleLike);

  // DELETE /likes/:post_id/destroy
  router.delete("/:post_id/destroy", validateJwtUser, LikeController.handleDislike);

  return router;
};
