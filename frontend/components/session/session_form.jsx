import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridList from '../posts/grid_list';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillMount() {
    // this.props.errors = [];
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
        <MuiThemeProvider>
          <GridList />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(SessionForm);
