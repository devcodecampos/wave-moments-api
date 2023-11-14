import { Router } from "express";
import { validateJwtUser } from "../../../commons/middlewares/validate-user-auth.middleware";
import CommentController from "../controllers/comment.controller";

export const CommentRoutes = (): Router => {
  const router = Router();

  // POST /comments/:post_id
  router.post("/:post_id", validateJwtUser, CommentController.createComment);

  // DELETE /comments/:comment_id
  router.delete("/:comment_id", CommentController.deleteComment);

  return router;
};
