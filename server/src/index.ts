import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./db/sequelize";
import cors from "cors"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.send("Express with TypeScript Server");
});

const start = async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
