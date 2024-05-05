import express, {Express} from "express";
import expressWs from "express-ws";

const app = express() as Express ;
const { getWss } = expressWs(app);
const aWSS = getWss();

export { app, aWSS };