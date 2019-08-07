import React from 'react';
import Message from './Message'

class MessageList extends React.Component {
  render() {
    const messages = this.props.channel.messages.map((messageData, index) => {
      return (
        <Message
          key={index}
          profilePicture={messageData.user.profile_picture}
          username={messageData.user.username}
          content={messageData.content.text} />
      )
    })
    return (
      <div className="messages_container">
        <h2 className="messages_container_header">{this.props.channel.name}</h2>
        <ul className="messages_container_list">
        {messages}
        </ul>
      </div>
    )
  }
}

export default MessageList;
