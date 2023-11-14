import { Request, Response } from "express";
import { AppDataSource } from "../../../services/database/data-source";
import { User } from "../../users/entities/user.entity";
import { Like } from "../entities/like.entity";
import { Post } from "../../posts/entities/post.entity";

class LikeController {
  async handleLike(req: Request, res: Response) {
    const { post_id } = req.params;

    try {
      const requestingUser = res.locals.user as User;

      const post = await AppDataSource.getRepository(Post).findOne({
        where: { id: +post_id },
      });

      if (!post) {
        return res.status(404).json({ ok: false, error: "Post Not Found" });
      }

      const likeExists = await AppDataSource.getRepository(Like).findOne({
        where: {
          post_id: +post_id,
          user_id: requestingUser.id,
        },
      });

      if (likeExists) {
        return res.status(200).json({
          ok: true,
          message: "Like Is Already Registered",
          likeExists,
        });
      }

      const like = await AppDataSource.getRepository(Like).save({
        post_id: +post_id,
        user_id: requestingUser.id,
      });

      return res.status(201).send({ ok: true, like });
    } catch (error) {
      console.log(error, "Error In HandleLike");
      return res.status(500).send({ ok: false, error: "Error When Liking" });
    }
  }

  async handleDislike(req: Request, res: Response) {
    const { post_id } = req.params;

    try {
      const requestingUser = res.locals.user as User;

      const post = await AppDataSource.getRepository(Post).findOne({
        where: { id: +post_id },
      });

      if (!post) {
        return res.status(404).json({ ok: false, error: "Post Not Found" });
      }

      const like = await AppDataSource.getRepository(Like).findOne({
        where: {
          post_id: +post_id,
          user_id: requestingUser.id,
        },
      });

      if (!like) {
        return res.status(404).json({ ok: false, error: "Like Not Found" });
      }

      await AppDataSource.getRepository(Like).softRemove(like);
      console.log(`Like ${like.id} Deleted`);

      return res
        .status(200)
        .json({ ok: true, message: "Dislike performed successfully" });
    } catch (error) {
      console.log(error, "Error In HandleDislike");
      res.status(500).send({ ok: false, error: "Error When Disliking" });
    }
  }
}

export default new LikeController();
