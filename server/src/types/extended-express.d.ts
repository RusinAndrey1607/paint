
import * as express from 'express';
import { Server } from 'http';
import { WebSocket } from 'ws';
import { WebSocketClient } from '../utils/messageHandlers';

declare module 'express' {
    interface Express {
        ws: (route: string, callback: (ws: WebSocketClient, req: express.Request, next: express.NextFunction) => void) => Server;
    }
}