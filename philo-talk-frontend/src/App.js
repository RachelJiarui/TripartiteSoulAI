import React, { useState } from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom'
import ResetMessages from './components/ResetMessages.js';
import TripartiteSoul from './components/TripartiteSoul.js';
import ResetTripartite from './components/ResetTripartite.js';

function App() {
  const [messages, setMessages] = useState([]);
  const [tripartite, setTripartite] = useState({reason: 0, spirit: 0, eros: 0})

  return (
    <div className="App">
      <ResetMessages setMessages={setMessages}/>
      <ResetTripartite setTripartite={setTripartite} />
      <TripartiteSoul tripartite={tripartite}/>
      <section>
        <ChatRoom messages={messages} setMessages={setMessages} setTripartite={setTripartite}/>
      </section>
    </div>
  );
}

export default App;