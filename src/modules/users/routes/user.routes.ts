import { Router } from "express";
import UserController from "../controller/user.controller";

export const UserRoutes = (): Router => {
  const router = Router();

  // POST /users
  router.post("/", UserController.createUser);
  // GET /users
  router.get("/", UserController.findAllUsers);

  // GET /users/:user_id
  router.get("/by_id/:user_id", UserController.findUserById);

  // DELETE /users/:user_id
  router.delete("/:user_id", UserController.deleteUser);

  // PATCH /users/:user_id
  router.patch("/:user_id", UserController.updateUser);

  // POST /users/auth
  router.post("/auth", UserController.authenticate);

  return router;
};