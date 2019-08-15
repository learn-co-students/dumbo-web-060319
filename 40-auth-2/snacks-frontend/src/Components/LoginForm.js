import React, { Component } from 'react';

class LoginForm extends Component {

  state={
    username: "",
    password: ""
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    fetch("http://localhost:3000/tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(userInfo => {
      if (!userInfo.errors) {
        localStorage.token = userInfo.token
        this.props.handleLogin(userInfo)
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={this.state.username} id="username" onChange={this.handleChange}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} id="password" onChange={this.handleChange}/>
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }

}

export default LoginForm;
