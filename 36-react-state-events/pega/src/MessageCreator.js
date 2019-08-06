import React from 'react';

class MessageCreator extends React.Component {
  render() {
    return (
      <form>
        <input type="file" />
        <input type="text" />
        <input type="submit" value="SEND THAT MESSAGE!" />
      </form>
    )
  }
}

export default MessageCreator;
