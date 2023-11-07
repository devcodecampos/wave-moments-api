import express from "express";
import { Request, Response } from "express";
import cors from "cors";

export const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

export async function startWebServer() {
  return new Promise((resolve) => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
      resolve(null);
    });
  });
}