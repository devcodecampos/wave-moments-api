import { Router } from "express";
import PostController from "../controllers/post.controller";
import { validateJwtUser } from "../../../commons/middlewares/validate-user-auth.middleware";

export const PostRoutes = (): Router => {
  const router = Router();

  // POST /posts
  router.post("/", validateJwtUser, PostController.createPost);

  // GET /posts
  router.get("/", PostController.findAllPosts);

  // GET /posts/:user_id
  router.get("/", validateJwtUser, PostController.findPostsByUserAuth);

  // GET /posts/:user_id
  router.get("/:user_id", PostController.findPostsByUserId);

  return router;
};
