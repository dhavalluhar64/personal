import express from 'express';
import { WebSocketServer } from 'ws';

const app = express();
const port = 3000;

// Basic Express route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Create WebSocket server
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('New WebSocket connection');
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Echo: ${message}`);
  });
  ws.send('Welcome to the WebSocket server!');
});