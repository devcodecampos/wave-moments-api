import { Request, Response } from "express";
import { AppDataSource } from "../../../services/database/data-source";
import { User } from "../../users/entities/user.entity";
import { Comment } from "../entities/comment.entity";
import { Post } from "../../posts/entities/post.entity";

class CommentController {
  async createComment(req: Request, res: Response) {
    const { post_id } = req.params;
    const { text } = req.body;

    try {
      const requestingUser = res.locals.user as User;

      const comment = await AppDataSource.getRepository(Comment).save({
        text,
        post_id: +post_id,
        user_id: requestingUser.id,
      });

      return res.status(201).send({ ok: true, comment });
    } catch (error) {
      console.log(error, "Error In CreateComment");
      return res
        .status(500)
        .send({ ok: false, error: "Error Creating Comment" });
    }
  }

  async deleteComment(req: Request, res: Response) {
    const { comment_id } = req.params;

    try {
      const comment = await AppDataSource.getRepository(Comment).findOne({
        where: { id: +comment_id },
      });

      if (!comment) {
        return res.status(404).json({ ok: false, error: "Comment Not Found" });
      }

      await AppDataSource.getRepository(Comment).softRemove(comment);
      console.log(`Comment ${comment.id} Deleted`);

      return res
        .status(200)
        .json({ ok: true, message: "Comment Deleted Successfully" });
    } catch (error) {
      console.log(error, "Error In DeleteComment");
      res.status(500).send({ ok: false, error: "Error Deleting Comment" });
    }
  }
}

export default new CommentController();
