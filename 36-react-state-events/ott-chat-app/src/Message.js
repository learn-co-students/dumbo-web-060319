import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <img width={50} src={this.props.profilePhoto}/>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Message;
