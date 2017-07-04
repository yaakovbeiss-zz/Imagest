import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      retype_password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const account = this.state;
    this.props.processForm({account});
    this.props.history.push('/');
  }

  demoLogin() {
    this.props.login({ account: {
      username: "yaakovbeiss",
      password: "password"
    }});
    this.props.history.push('/');
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {

    return (
      <div>
        <NavLink className="back-imgur" exact to='/' >
          <div>back to Imgur</div>
        </NavLink>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <img className="imgur-image" src={window.images.imgur_logo}/>
            <br/>
            <div className="register-box">
              Register With
            </div>
            <div className="social-box">
              <div className="facebook logo">
                <img src={window.images.facebook_icon} className="facebook-icon" href="https://accounts.google.com/signin/v2/sl/pwd?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2Fapps%2Factivities&followup=https%3A%2F%2Fplus.google.com%2Fapps%2Factivities&flowName=GlifWebSignIn&flowEntry=ServiceLogin" />
              </div>
              <div className="twitter logo">
                <img src={window.images.twitter_icon} className="twitter-icon" href="https://twitter.com/login" />
              </div>
              <div className="google-plus logo">
                <img src={window.images.google_plus_icon} className="google-plus-icon" href="https://accounts.google.com/signin/v2/sl/pwd?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2Fapps%2Factivities&followup=https%3A%2F%2Fplus.google.com%2Fapps%2Factivities&flowName=GlifWebSignIn&flowEntry=ServiceLogin" />
              </div>
              <div className="yahoo logo">
                <img src={window.images.yahoo_icon} className="yahoo-icon" href="https://accounts.google.com/signin/v2/sl/pwd?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2Fapps%2Factivities&followup=https%3A%2F%2Fplus.google.com%2Fapps%2Factivities&flowName=GlifWebSignIn&flowEntry=ServiceLogin" />
              </div>
            </div>
            {this.renderErrors()}
            <div className="login-divider">
              <div className="divider"></div>
              or with Imgur
              <div className="divider"></div>
            </div>
            <div className="login-form">
              <br/>
                <label className="sign-in-text-input">
                  <input type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </label>
                <br/>
          
                <br/>
                <label className="sign-in-text-input">
                  <input type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                <br/>


                <div className="terms">By registering you agree to our terms of service.</div>
              </div>
                <div className="sign-up-buttons">
                  <Link to="/login" className="to-login-link">login instead</Link>
                  <input className="submit-button" type="submit" value="Sign Up" />
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
