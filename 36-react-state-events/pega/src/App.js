import React from 'react';
import Sidebar from './Sidebar'
import Chat from './Chat'

class App extends React.Component {
  render() {
    const channels = this.props.data.channels.map(channel => {
      return channel.name
    })
    return (
      <div className="App">
          <Sidebar user={this.props.data.current_user} channels={channels} />
          <Chat channel={this.props.data.channels[3]} user={this.props.data.current_user} />
      </div>
    );
  }
}

export default App;
