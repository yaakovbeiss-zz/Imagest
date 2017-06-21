import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  // navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to="/signup">sign up instead</Link>;
  //   } else {
  //     return <Link to="/login">log in instead</Link>;
  //   }
  // }

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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <img className="imgur-image" src="https://imgur.com/images/access/access-logo.png"/>
          <br/>
          <div className="register-box">
            Register With
          </div>
          <div className="social-box">
            <a className="facebook logo" href="https://en-gb.facebook.com/login/" value="f">f</a>
            <img src="/twitterlogo.jpg" className="twitter logo" href="https://twitter.com/login" />
            <img src="" className="google-plus logo" href="https://accounts.google.com/signin/v2/sl/pwd?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2Fapps%2Factivities&followup=https%3A%2F%2Fplus.google.com%2Fapps%2Factivities&flowName=GlifWebSignIn&flowEntry=ServiceLogin" />
            <a src="" className="yahoo logo" href="https://login.yahoo.com/">Y!</a>
          </div>
          {this.renderErrors()}
          <div className="login-divider">
            <div className="divider">-----------------</div>
            or with Imgur
            <div className="divider">-----------------</div>
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
              <label className="sign-in-text-input">
                <input type="text"
                  placeholder="Email"
                  value=""
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
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
              <label className="sign-in-text-input">
                <input type="password"
                  placeholder="Retype Password"
                  value=""
                  onChange={this.update('password')}
                  className="login-input"
                />
            </label>By registering you agree to our terms of service.
              <br/>
              <div className="sign-up-buttons">
                <input className="submit-button" type="submit" value="Submit" />
                <button className="sign-up-button">Next</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
