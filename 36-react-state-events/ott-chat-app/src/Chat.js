import React from "react";
import MessagesContainer from "./MessagesContainer";
import MessageForm from "./MessageForm";

class Chat extends React.Component {
  render() {
    return (
      <div>
        <MessagesContainer
          name={this.props.channel.name}
          messages={this.props.channel.messages}/>
        <MessageForm />
      </div>
    );
  }
}

export default Chat;
