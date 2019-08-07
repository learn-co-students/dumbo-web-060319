import React from 'react';
import MessageForm from './MessageForm'
import MessagesContainer from './MessagesContainer'

class Chat extends React.Component {
  render() {
    return (
      <div>
        <MessagesContainer channel={this.props.channel}/>
        <MessageForm onNewMessage={this.props.onNewMessage}/>
      </div>
    )
  }
}

export default Chat;
