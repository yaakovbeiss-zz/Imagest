import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    login: account => dispatch(login(account)),
    processForm: account => dispatch(processForm(account)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
