import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./db/sequelize";
import { authRouter } from "./routes/auth.router";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.middleware";
import {app} from "./app/expressSetup";
import { websoketHandler } from "./utils/messageHandlers";

dotenv.config();


const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use(errorMiddleware);

//@ts-ignore
app.ws('/',(ws:any) =>{
  ws.on("message", (msg:string) => {
    websoketHandler(ws, msg)
  });})

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
