import express, { Express } from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./db/sequelize";
import { authRouter } from "./routes/auth.router";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.middleware";
import expressWs from "express-ws";

dotenv.config();

const { app, getWss } = expressWs(express());
const aWSS = getWss();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use(errorMiddleware);
app.ws("/", (ws, req) => {
  ws.on("message", (msg: any) => {
    msg = JSON.parse(msg);
    broadcastMessage(`User with id ${msg.id} Connected to server `)
  });
});
const broadcastMessage = (msg: string) => {
  aWSS.clients.forEach((client) => {
    client.send(msg);
  });
};
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
