import React from 'react';
import Message from './Message'

class MessageList extends React.Component {
  render() {
    const messages = this.props.channel.messages.map((messageData, index) => {
      return (
        <Message
          key={index}
          profilePicture={messageData.user.profile_picture}
          content={messageData.content.text} />
      )
    })
    return (
      <div>
        <h4>{this.props.channel.name}</h4>
        {messages}
      </div>
    )
  }
}

export default MessageList;
