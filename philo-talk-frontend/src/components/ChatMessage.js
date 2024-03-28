import React from 'react';
import platoImg from './pfp/plato.png';
import userImg from './pfp/user.png';

function ChatMessage(props) {
  
  const { text, uid, speaker } = props.message;

  const speakerImg = {
    "Plato": platoImg,
    "User": userImg
  }

  return (<>
    <div key={uid} className='message'>
      <img src={speakerImg[speaker]} alt="pfp"/>
      <div className='message-text'>
        <h1>{speaker}</h1>
        <p>{text}</p>
      </div>
    </div>
  </>)
}

export default ChatMessage;