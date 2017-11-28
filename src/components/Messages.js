import React from 'react';
import Message from './Message.js';

// Pass props to messages

const Messages = ({ messages, toggleStar, toggleSelect, toggleWithLabels}) => {
  return (
    <div>
      {messages.map (message => ( <Message key={message.id} message={message} toggleStar={toggleStar} toggleSelect={toggleSelect} toggleWithLabels={toggleWithLabels}/>))}
    </div>
  )
}

export default Messages
