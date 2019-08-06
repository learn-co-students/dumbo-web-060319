import React from "react";
import Message from "./Message";

class MessagesContainer extends React.Component {
  render() {
    const messageComponents = this.props.messages.map(message => {
      return <Message
          profilePhoto={message.user.profile_picture}
          text={message.content.text} />
    })
    return (
      <div>
        <h4>{this.props.name}</h4>
        <div>
          {messageComponents}
        </div>
      </div>
    );
  }
}

export default MessagesContainer;
