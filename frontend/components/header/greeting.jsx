import React from 'react'
import { Link } from 'react-router-dom';


class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    if (this.props.currentaccount) {
    return (
      <div className="signup-signin-links icon-container">
        <button className="icon-container signout" onClick={this.props.logout}>logout</button>
        {this.props.currentaccount.username}
      </div>
    )
  } else {
    return (
        <div className="signup-signin-links icon-container">
          <Link to="/login" className="right-nav-link"> sign in </Link>
          <Link to="/signup" className="right-nav-link"> sign up </Link>
        </div>
      )
    }

  }
}
export default Greeting;
