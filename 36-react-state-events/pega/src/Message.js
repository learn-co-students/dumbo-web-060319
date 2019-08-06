import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.profilePicture} alt="the " width={50} />
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Message;
