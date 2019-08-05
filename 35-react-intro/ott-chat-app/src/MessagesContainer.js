import React from "react";
import Message from "./Message";

class MessagesContainer extends React.Component {
  render() {
    return (
      <div>
        <p>Hi, I'm the MessagesContainer Component!</p>
        <Message />
        <Message />
        <Message />
      </div>
    );
  }
}

export default MessagesContainer;
