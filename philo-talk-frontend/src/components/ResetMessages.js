import React from 'react';
import { resetMessages } from './../services/resetMessages.js';

function ResetMessages({ setMessages }) {

  async function handleReset() {
    await resetMessages();
    setMessages([]);
  }

  return (
    <div>
      <button onClick={handleReset}>Reset Messages</button>
    </div>
  )
}

export default ResetMessages;