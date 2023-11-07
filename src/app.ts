import express from "express";
import cors from "cors";
import { UserRoutes } from "./modules/users/routes/user.routes";

export const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());

app.use("/users", UserRoutes());

export async function startWebServer() {
  return new Promise((resolve) => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
      resolve(null);
    });
  });
}