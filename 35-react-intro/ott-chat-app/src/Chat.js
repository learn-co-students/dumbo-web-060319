import React from "react";
import MessagesContainer from "./MessagesContainer";
import MessageForm from "./MessageForm";

class Chat extends React.Component {
  render() {
    return (
      <div>
        <h3>Hi, I'm the Chat Component!</h3>
        <MessagesContainer />
        <MessageForm />
      </div>
    );
  }
}

export default Chat;
