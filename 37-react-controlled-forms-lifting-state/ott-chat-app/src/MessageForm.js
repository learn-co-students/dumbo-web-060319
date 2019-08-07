import React from 'react';

class MessageForm extends React.Component {
  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({message: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onNewMessage(this.state.message)
  }

  render() {

    // console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit} style={{background: '#F2F2F2', padding: 5}} className="messages_container_compose">
        <input
          value={this.state.message}
          onChange={this.handleChange}
          type="text"
          name="new_message_text"
          placeholder={'Send a message!'}/>
        <input type="submit" value="SEND THAT MESSAGE!" />
      </form>
    )
  }
}

export default MessageForm;
