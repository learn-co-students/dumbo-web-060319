import React, { Component } from 'react';
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'
import Profile from './Components/Profile'
import './App.css'

class App extends Component {

  state = {
    id: 0,
    username: "",
    user_snacks: []
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Snack Attack</h1>
        <LoginForm></LoginForm>
      </div>
    );
  }

}

export default App;
