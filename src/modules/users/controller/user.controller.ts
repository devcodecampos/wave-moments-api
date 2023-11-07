import { AppDataSource } from "../../../services/database/data-source";
import { User } from "../entities/user.entity";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

class UserController {
  async createUser(req: Request, res: Response) {
    const { name, email, password, bio } = req.body;

    try {
      const userExists = await AppDataSource.getRepository(User).findOneBy({
        email,
      });

      if (userExists) {
        res.status(200).json({
          ok: true,
          message: "User Is Already Registered",
          userExists,
        });
      }

      const user = await AppDataSource.getRepository(User).save({
        name,
        email,
        password_hash: bcrypt.hashSync(password, 10),
        bio,
      });

      console.log(`User ${user.id} Created`);
      res.status(201).json({ ok: true, message: "User Created Successfully" });
    } catch (error) {
      console.log(error, "Error In CreateUser");
      return res
        .status(500)
        .json({ ok: false, message: "Error Creating User" });
    }
  }

  async findAllUsers(req: Request, res: Response) {
    try {
      const users = await AppDataSource.getRepository(User).find({
        select: ["id", "name", "bio", "followers_count", "followers_count"],
      });

      if (!users) {
        return res.status(404).json({ ok: true, message: "Users Not Found" });
      }

      return res.status(200).json({ ok: true, users });
    } catch (error) {
      console.log(error, "Error In FindAllUsers");
      return res
        .status(500)
        .json({ ok: false, message: "Error Finding All Users" });
    }
  }

  async findUserById(req: Request, res: Response) {
    const { user_id } = req.params;

    try {
      const user = await AppDataSource.getRepository(User).findOne({
        select: ["id", "name", "bio", "followers_count", "followers_count"],
        where: { id: +user_id },
      });

      if (!user) {
        return res.status(404).json({ ok: true, message: "User Not Found" });
      }

      return res.status(200).json({ ok: true, user });
    } catch (error) {
      console.log(error, "Error In FindUserById");
      res.status(500).send({ ok: false, error: "Error Finding User" });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { user_id } = req.params;
    const { name, bio } = req.body;

    try {
      const user = await AppDataSource.getRepository(User).findOne({
        where: { id: +user_id },
      });

      if (!user) {
        return res.status(404).json({ ok: false, error: "User Not Found" });
      }

      if (name) user.name = name;
      if (bio) user.bio = bio;

      await AppDataSource.getRepository(User).save(user);
      console.log(`User ${user.id} Updated`);

      return res.status(200).json({ ok: true, user });
    } catch (error) {
      console.log(error, "Error In UpdateUser");
      res.status(500).send({ ok: false, error: "Error Updating User" });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { user_id } = req.params;

    try {
      const user = await AppDataSource.getRepository(User).findOne({
        where: { id: +user_id },
      });

      if (!user) {
        return res.status(404).json({ ok: false, error: "User Not Found" });
      }

      await AppDataSource.getRepository(User).softDelete(user);
      console.log(`User ${user.id} Deleted`);

      return res
        .status(200)
        .json({ ok: true, message: "User Deleted Successfully" });
    } catch (error) {
      console.log(error, "Error In DeleteUser");
      res.status(500).send({ ok: false, error: "Error Deleting User" });
    }
  }
}

export default new UserController();