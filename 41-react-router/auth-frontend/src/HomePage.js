
import React from 'react';
import { Link } from 'react-router-dom'

class HomePage extends React.Component {

 
  render() {
    console.log(this.props)
    return (
      <div>
      <h1> {this.props.username ? `Hello ${this.props.username}!` : 'Getting your profile...'}</h1>
      <ul>
        <marquee><Link to="/messages">Click here to go to the messages pafe y'all</Link></marquee> 
      </ul>
      </div>
    )
  }
}

export default HomePage;














// import React from 'react';
// import { Link } from 'react-router-dom'

// class HomePage extends React.Component {

  
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//       <h1> {this.props.username ? `Hello ${this.props.username}!` : 'Getting your profile...'}</h1>
//       <ul>
//         <li><Link to="/messages">Go to messasges</Link></li>
//       </ul> 
//       </div>
//     )
//   }
// }

// export default HomePage;
