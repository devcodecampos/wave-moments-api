import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
