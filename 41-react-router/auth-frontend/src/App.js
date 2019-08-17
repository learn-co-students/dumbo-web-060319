import React from 'react';
import './App.css';
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import HomePage from './HomePage'
import { Switch, Route } from 'react-router-dom'
import MessagesPage from './MessagesPage';
import FourOhFourPage from './FourOhFourPage';

class App extends React.Component {
  state = {
    username: ''
  }

  // redirect = (page) => {
  //   this.setState({ page: page})
  // }

  componentDidMount() {
    if (localStorage.token) {
        fetch('http://localhost:3001/profile', {
          headers: {
            Authorization: localStorage.token
          }
        })
        .then(res => res.json())
        .then(profileInfo => this.setState({username: profileInfo.username}))
      }
    }
  

  render() {
    return (
    <Switch> 
      <Route 
      exact 
      path="/" 
      render={(routerProps)=> <HomePage  {...routerProps} username={this.state.username}/>}
       />
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route 
      path="/messages" 
      render={(routerProps)=> <MessagesPage  {...routerProps} username={this.state.username}/>}
      />
      <Route component={FourOhFourPage} /> 
    </Switch>
    // switch(this.state.page) {
    //   case 'login':
    //     return <LoginPage redirect={this.redirect} /> 
    //   case 'signup':
    //     return <SignupPage redirect={this.redirect} /> 
    //   case 'home':
    //     return < HomePage />
    // }
    )
  }
}

export default App;



// import React from 'react';
// import './App.css';
// import LoginPage from './LoginPage'
// import SignupPage from './SignupPage'
// import HomePage from './HomePage'
// import MessagesPage from './MessagesPage'
// import FourOhFourPage from './FourOhFourPage'
// import { Switch, Route } from 'react-router-dom'

// class App extends React.Component {
//   state = {
//     username: ''
//   }

//   componentDidMount() {
//     if(localStorage.token) {
//     fetch('http://localhost:3001/profile', {
//       headers: {
//         Authorization: localStorage.token
//       }
//     })
//     .then(res => res.json())
//     .then(profileInfo => this.setState({username: profileInfo.username}))
//     }
//   }

//   render() {
//     console.log(this.state)
//      return( 
//        <Switch> 
//         <Route path="/signup" component={SignupPage} /> 
//         <Route path="/login" component={LoginPage} /> 
//         <Route path="/messages" 
//         render={(routerProps) => <MessagesPage {...routerProps}username={this.state.username} />}/>/> 
//         <Route exact 
//         path="/" 
//         // component={HomePage}
//         render={(routerProps) => <HomePage {...routerProps}username={this.state.username} />}/>
//         <Route component={FourOhFourPage} />
//        </Switch>
//      )
//   }
// }

// export default App;


