import React from 'react';
import Message from './Message'

class MessageList extends React.Component {
  render() {
    return (
      <div>
        Hello from the MessageList!!!
        <Message />
        <Message />
        <Message />
      </div>
    )
  }
}

export default MessageList;
