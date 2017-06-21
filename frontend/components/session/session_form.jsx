import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
  }

  demoLogin() {
    this.props.login({ account: {
      username: "yaakovbeiss",
      password: "password"
    }});
    this.props.history.push('/');
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
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
          <img className="imgur-image" src="https://imgur.com/images/access/access-logo.png"/>
          <br/>
            <div className="register-box">
              Sign In with
            </div>
            <div className="social-box">
              <a className="facebook logo" href="https://en-gb.facebook.com/login/" value="f">f</a>
              <img src="" className="twitter logo" href="https://twitter.com/login" />
              <img src="" className="google-plus logo" href="https://accounts.google.com/signin/v2/sl/pwd?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2Fapps%2Factivities&followup=https%3A%2F%2Fplus.google.com%2Fapps%2Factivities&flowName=GlifWebSignIn&flowEntry=ServiceLogin" />
              <a src="" className="yahoo logo" href="https://login.yahoo.com/">Y!</a>
            </div>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-divider">
              <div className="divider">-----------------</div>
              or with Imgur
              <div className="divider">-----------------</div>
            </div>
            {this.renderErrors()}
            <div className="login-form login-form-session">
              <br/>
              <label>
                <input type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br/>
              <label>
                <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br/>
            </div>
          </form>
          <div className="sign-up-buttons">
            <button className="to-login-link demo-login" onClick={this.demoLogin}>demo login</button>
            <button className="submit-button" onClick={this.handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
