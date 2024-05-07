import express, { Request } from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./db/sequelize";
import { authRouter } from "./routes/auth.router";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.middleware";
import {app} from "./app/expressSetup";
import { websoketHandler } from "./utils/messageHandlers";
import { fileService } from "./services/file.service";
import { ApiError } from "./exceptions/api.error";

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

app.post("/image",(req:Request<{},{},{img:string},{id:string}>,res) =>{
   try {
    const data = req.body.img.replace('data:image/png;base64', '');
    fileService.writeFile(req.query.id, data);
    return res.status(200).json({ message: "File uploaded" });
  } catch (error) {
    throw ApiError.ServerError('Error ocured while writing file')
  }
  })
  app.get("/image",async (req:Request<{},{},{img:string},{id:string}>,res) =>{
    try {
      const file = await fileService.getFile(req.query.id);
      //@ts-ignore
      const data = `data:image/png;base64,` + file.toString('base64');
      res.json(data);
    } catch (error) {
      throw ApiError.BadRequest('Can not find file"')
    }
  })
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
