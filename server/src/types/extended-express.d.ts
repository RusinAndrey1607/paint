
import * as express from 'express';
import { Server } from 'http';
import { WebSocket } from 'ws';

declare module 'express' {
    interface Express {
        ws: (route: string, callback: (ws: WebSocket, req: express.Request, next: express.NextFunction) => void) => Server;
    }
}