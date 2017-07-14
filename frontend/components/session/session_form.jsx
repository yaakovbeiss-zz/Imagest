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
      username: "guest",
      password: "password"
    }});
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
          <div>back to Imagest</div>
        </NavLink>
        <div className="login-form-container">
          <img className="imgur-image" src={window.images.imgur_logo}/>
          <br/>
            <div className="register-box">
              Check out my info at:
            </div>
            <div className="social-box">
              <a className="linkedin logo" href="https://www.linkedin.com/in/yaakovbeiss/" >
                <img src={window.images.linkedin_icon} className="linkedin-icon" />
              </a>
              <a className="github logo" href="https://github.com/yaakovbeiss">
                <img src={window.images.github_icon} className="github-icon"  />
              </a>
              <a className="resume logo" href="http://www.yaakovbeiss.com/Yaakov%20Beiss%20resume.pdf" target="_blank">
                <img src={window.images.resume_icon} className="resume-icon" />
              </a>
              <div className="angellist logo">
                <img src={window.images.angellist_icon} className="angellist-icon" href="https://accounts.google.com/signin/v2/sl/pwd?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2Fapps%2Factivities&followup=https%3A%2F%2Fplus.google.com%2Fapps%2Factivities&flowName=GlifWebSignIn&flowEntry=ServiceLogin" />
              </div>
            </div>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-divider">
              <div className="divider"></div>
              or have fun on imagest!
              <div className="divider"></div>
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
