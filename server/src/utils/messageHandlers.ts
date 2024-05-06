import { Message, WebSocketClient } from "../types/webSocket.types";
import { broadcastMessage } from "./broadcastMessage";



const drawHandler = (ws:WebSocketClient, msg:Message) => {
    ws.id = msg.id 
    broadcastMessage(JSON.stringify(msg))
};
const connectionHandler = (ws:WebSocketClient, msg:Message) => {
    ws.id = msg.id 
    broadcastMessage(`User ${msg.username} connected`)
};
export const websoketHandler = (ws:WebSocketClient,msg:string) => {
    const parsedMsg:Message = JSON.parse(msg);
    switch (parsedMsg.method) {
        case "connection":
            connectionHandler(ws,parsedMsg)
            break;
        case "draw":
            drawHandler(ws,parsedMsg)
            break;
    }
};
