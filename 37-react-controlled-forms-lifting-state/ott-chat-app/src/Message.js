import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <img className="user_img" src={this.props.profilePicture} alt="the " width={50} />
        <div>
          <h3>{this.props.username}</h3>
          <p>{this.props.content}</p>
        </div>
      </div>
    )
  }
}

export default Message;
