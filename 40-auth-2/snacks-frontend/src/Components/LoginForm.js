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

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form>
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
