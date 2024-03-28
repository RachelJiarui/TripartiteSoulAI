import React, { useRef, useState, useEffect } from 'react';
import ChatMessage from './ChatMessage.js';
import { fetchMessages } from './../services/fetchMessages.js';
import { postMessage } from './../services/postMessage.js';
import { generateResp } from './../services/generateResp.js';
import { fetchTripartiteSoul } from './../services/fetchTripartiteSoul.js';
import { calcTripartiteSoul } from './../services/calcTripartiteSoul.js';

function ChatRoom({ messages, setMessages, setTripartite }) {
  const dummy = useRef();
  const [formValue, setFormValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    const fetchInitialMessages = async () => {
      try {
        const initialMessages = await fetchMessages();
        setMessages(initialMessages);
      } catch (error) {
        console.error('Error fetching initial messages:', error);
      }
    };

    fetchInitialMessages();
  }, []);

  const updateTripartite = async () => {
    try {
      console.log("Updating tripartite soul in front end")
      await calcTripartiteSoul(userMessage);
      const tripartiteSoul = await fetchTripartiteSoul();
      console.log("New tripartite soul: " + JSON.stringify(tripartiteSoul))
      setTripartite(tripartiteSoul);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].speaker === 'User') {
      const handlePhilosopherResponse = async () => {
        console.log("Handling philosopher's response: " + JSON.stringify(messages));
        setIsLoading(true); // Start loading
        try {
          const philoResponse = await generateResp(messages);
          const resp = { text: philoResponse, uid: Date.now(), speaker: 'Plato' };
          await postMessage(resp);
          setMessages(messages => [...messages, resp]);
        } catch (error) {
          console.error("Failed to fetch philosopher's response:", error);
        } finally {
          setIsLoading(false);
          updateTripartite();
        }
      };
  
      handlePhilosopherResponse();
    }
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    
    try {
      const msg = { text: formValue, uid: new Date().toISOString(), speaker: 'User' }
      await postMessage(msg);
      setMessages(await fetchMessages());
      setFormValue('');
      setUserMessage(msg.text)
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  }

  return (<div>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      {isLoading && <div className="plato-typing">Plato typing...</div>}

      <span className='dummy' ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Talk to Plato about your soul..." />

      <button type="submit" disabled={!formValue}>⬆</button>

    </form>
  </div>)
}

export default ChatRoom;