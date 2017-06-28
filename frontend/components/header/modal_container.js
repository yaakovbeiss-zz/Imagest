import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Modal from './modal';

const mapStateToProps = ({ session }, ownProps ) => {
  return {
    loggedIn: Boolean(session.currentaccount),
  }
};

export default withRouter(connect(
  mapStateToProps,
  null
)(Modal))
