import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AccountShowPage from './account_show_page';
import { requestAccounts, requestAccount } from '../../actions/account_actions';
import { requestPosts } from '../../actions/post_actions';
import { selectAccountPosts, selectAccounts } from '../../reducers/selectors';

const mapStateToProps = ({ session, accounts, post }, ownProps ) => {
  return {
    currentaccountId: session.currentaccount.id,
    posts: selectAccountPosts(post, ownProps),
    comments: session.currentaccount.comments,
    votes: session.currentaccount.votes,
    accounts: selectAccounts(accounts),
    accountId: accounts.account,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPosts: () => dispatch(requestPosts()),
    requestAccounts: () => dispatch(requestAccounts()),
    requestAccount: (id) => dispatch(requestAccount(id)),
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountShowPage))
