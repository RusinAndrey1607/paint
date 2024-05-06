import WebSocket from 'ws';

export interface Message {
    method: string;
    id: string;
    userId:string,
    username: string
  }
  
export interface WebSocketClient extends WebSocket {
    id: string;
}