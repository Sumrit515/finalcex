// pages/api/websocket.ts

import { IncomingMessage } from 'http';
import { Server } from 'ws';

const WebSocket = (req, res) => {
  const wss = new Server({ noServer: true });

  wss.on('connection', (socket) => {
    console.log('Client connected.');

    socket.on('message', (message) => {
      console.log(`Received: ${message}`);
      socket.send(`You sent: ${message}`);
    });

    socket.on('close', () => {
      console.log('Client disconnected.');
    });
  });

  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (socket) => {
    wss.emit('connection', socket, req);
  });
};

export default WebSocket;
