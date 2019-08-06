import React from "react";

// <Channels hello={'hi'}/>
// new Channels({hello: 'hi'})
class Channels extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channelNames: props.channelNames
    }
  }

  handleClick = () => {
    this.setState({ channelNames: [...this.state.channelNames, '#bananas'] })
  }

  render() {
    console.log('state: ', this.state)
    const channelLis = this.state.channelNames.map(channelName => {
      return <li>{channelName}</li>;
    });


    return (
      <div>
        <h4>
          Channels {this.hello}<button onClick={this.handleClick}>+</button>
        </h4>
        <ul>{channelLis}</ul>
      </div>
    );
  }
}

export default Channels;
