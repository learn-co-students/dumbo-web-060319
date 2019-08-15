import React, { Component } from 'react';
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'
import Profile from './Components/Profile'
import './App.css'

class App extends Component {

  state = {
    id: 0,
    username: "",
    page: "Login"
  }

  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(res =>res.json())
      .then((userInfo) => {
        if (!userInfo.errors) {
          this.handleLogin(userInfo)
        }
      })
    }
  }

  handleLogin = (userInfo) => {
    this.setState({
      id: userInfo.user_id,
      username: userInfo.username,
      page: "Profile"
    })
  }

  whichToRender = () => {
    switch (this.state.page) {
      case "Login":
        return <LoginForm handleLogin={this.handleLogin}/>
      case "Profile":
        return <Profile username={this.state.username} id={this.state.id}/>
      case "Register":
        return <RegisterForm handleLogin={this.handleLogin}/>
      default:
        return <LoginForm handleLogin={this.handleLogin}/>
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Welcome to Snack Attack</h1>
          {this.whichToRender()}
        </div>
      </div>
    );
  }

}

export default App;
