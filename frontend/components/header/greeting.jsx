import React from 'react'
import { Link } from 'react-router-dom';


class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    if (this.props.currentaccount) {
    return (
      <div className="signup-signin-links icon-container greeting">
        <Link to={`/accounts/${this.props.currentaccount.id}`} className="greeting">
          {this.props.currentaccount.username}
        </Link>
          <button className="icon-container logout" onClick={this.props.logout}>logout</button>
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
