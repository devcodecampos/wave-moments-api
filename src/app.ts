import express from "express";
import cors from "cors";
import { UserRoutes } from "./modules/users/routes/user.routes";
import { PostRoutes } from "./modules/posts/routes/post.routes";
import { CommentRoutes } from "./modules/comments/routes/comment.routes";
import { LikeRoutes } from "./modules/likes/routes/like.routes";

export const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());

app.use("/users", UserRoutes());
app.use("/posts", PostRoutes());
app.use("/comments", CommentRoutes());
app.use("/likes", LikeRoutes())

export async function startWebServer() {
  return new Promise((resolve) => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
      resolve(null);
    });
  });
}