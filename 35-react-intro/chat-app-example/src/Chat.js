import React from 'react';
import MessageCreator from './MessageCreator'
import MessageList from './MessageList'

class Chat extends React.Component {
  render() {
    return (
      <div>
        Hello from the Chat!!!
        <MessageList/>
        <MessageCreator/>
      </div>
    )
  }
}

export default Chat;
