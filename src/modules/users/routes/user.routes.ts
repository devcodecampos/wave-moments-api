import { Router } from "express";
import UserController from "../controllers/user.controller";
import { validateUserCreationMiddleware } from "../middlewares/validate-user-creation.middleware";
import { validateAuthTokenCreationMiddleware } from "../middlewares/validate-auth-token-creation.middleware";

export const UserRoutes = (): Router => {
  const router = Router();

  // POST /users
  router.post("/", validateUserCreationMiddleware, UserController.createUser);
  
  // GET /users
  router.get("/", UserController.findAllUsers);

  // GET /users/:user_id
  router.get("/:user_id", UserController.findUserById);

  // DELETE /users/:user_id
  router.delete("/:user_id", UserController.deleteUser);

  // PATCH /users/:user_id
  router.patch("/:user_id", UserController.updateUser);

  // POST /users/auth
  router.post("/auth", validateAuthTokenCreationMiddleware, UserController.authenticate);

  return router;
};
