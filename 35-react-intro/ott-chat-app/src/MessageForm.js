import React from "react";

class MessageForm extends React.Component {
  render() {
    return (
      <div>
        <p>Hi, I'm the MessageForm Component!</p>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default MessageForm;
