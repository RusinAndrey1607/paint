import {aWSS } from "../app/expressSetup";


export const broadcastMessage = (msg: string) => {
    aWSS.clients.forEach((client) => {
      client.send(msg);
    });
};