
const ws = new WebSocket(process.env.NEXT_PUBLIC_PAINT_WS_URL || 'ws://localhost:5000');

ws.onopen = () => {
  console.log('WebSocket client connected');
};

export default ws;