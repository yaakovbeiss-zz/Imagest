import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AccountShowPage from './account_show_page';
import { requestAccounts, requestAccount } from '../../actions/account_actions';

const mapStateToProps = ({ session, accounts }, ownProps ) => {
  return {
    currentaccountId: session.currentaccount.id,
    posts: session.currentaccount.posts,
    comments: session.currentaccount.comments,
    votes: session.currentaccount.votes,
    accounts: accounts.entities,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAccounts: () => dispatch(requestAccounts()),
    requestAccount: (id) => dispatch(requestAccount(id))
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountShowPage))
