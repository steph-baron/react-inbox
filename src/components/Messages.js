import React from 'react';
import Message from './Message.js';

// Pass props to messages

const Messages = ({ messages, toggleStar }) => {
  return (
    <div>
      {messages.map (message => ( <Message key={message.id} message={message} toggleStar={toggleStar}/>))}
    </div>
  )
}

export default Messages


// class Messages extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = { messages: props.messages }
//   }
//
//   handleNewMessage = (message) => {
//     message.id = this.state.messages.length
//     this.setState({ messages: [message, ...this.state.messages]})
//     // these are the individual new messages
//   }
//
//   render() {
//     return (
//       <div>
//         <Message messages={this.state.messages}/>
//         <Toolbar
//       </div>
//     )
//   }
// }
//
//
//
// export default Messages
