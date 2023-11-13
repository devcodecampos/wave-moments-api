import { Request, Response } from "express";
import { AppDataSource } from "../../../services/database/data-source";
import { Post } from "../entities/post.entity";
import { User } from "../../users/entities/user.entity";

class PostController {
  async createPost(req: Request, res: Response) {
    try {
      const requestingUser = res.locals.user as User;

      const { description, image_url } = req.body;
      const post = await AppDataSource.getRepository(Post).save({
        image_url,
        description,
        user_id: requestingUser.id,
      });

      return res.status(201).send({ ok: true, post });
    } catch (error) {
      console.log(error, "Error In CreatePost");
      return res.status(500).send({ ok: false, error: "Error Creating Post" });
    }
  }

  async findAllPosts(req: Request, res: Response) {
    try {
      const posts = await AppDataSource.getRepository(Post).find({
        relations: ["user"],
      });

      return res.status(200).send({ ok: true, posts });
    } catch (error) {
      console.log(error, "Error In FindAllPosts");
      return res.status(500).send({ ok: false, error: "Error Listing Posts" });
    }
  }

  async findPostsByUserAuth(req: Request, res: Response) {
    try {
      const requestingUser = res.locals.user as User;
      console.log(requestingUser, "requestingUser");

      const posts = await AppDataSource.getRepository(Post).find({
        where: { user_id: requestingUser.id },
      });

      return res.status(200).json({ ok: true, posts: posts });
    } catch (error) {
      console.log(error, "Error In FindPostsByUser");
      res.status(500).send({ ok: false, error: "Error Listing Posts" });
    }
  }

  async findPostsByUserId(req: Request, res: Response) {
    const { user_id } = req.params;

    try {
      const user = await AppDataSource.getRepository(User).findOne({
        where: { id: +user_id },
      });

      if (!user) {
        return res.status(404).json({ ok: false, error: "User Not Found" });
      }

      const posts = await AppDataSource.getRepository(Post).find({
        where: { user_id: user.id },
      });

      return res.status(200).json({ ok: true, posts: posts });
    } catch (error) {
      console.log(error, "Error In FindPostsByUserId");
      res.status(500).send({ ok: false, error: "Error Listing Posts" });
    }
  }
}

export default new PostController();
