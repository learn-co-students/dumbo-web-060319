import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

class App extends React.Component {
  render() {
    const { current_user, channels } = this.props.currentData;
    return (
      <div>
        <h1>Hello! I'm the App Component!</h1>
        <Sidebar user={current_user} channels={channels} />
        <Chat />
      </div>
    );
  }
}

export default App;
