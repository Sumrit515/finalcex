// components/IncrementingNumber.tsx

import React from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const WebTest = () => {
  const socketUrl = 'ws://localhost:3000/api/websocket'; // Replace with your WebSocket API URL

  const { lastJsonMessage, readyState } = useWebSocket(socketUrl);
  console.log(readyState, lastJsonMessage)

  return (
    <div>
      <h2>Incrementing Number:</h2>
      {readyState === ReadyState.OPEN ? (
        <p>{'Waiting for data...'}</p>
      ) : (
        <p>WebSocket connection status: {readyState}</p>
      )}
    </div>
  );
};

export default WebTest;
