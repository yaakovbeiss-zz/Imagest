import { connect } from 'react-redux';
import AccountShowPage from './account_show_page';
import { requestAccounts } from '../../actions/account_actions';

const mapStateToProps = ({ session }, ownProps ) => {
  return {
    posts: session.currentaccount.posts,
    comments: session.currentaccount.comments,
    votes: session.currentaccount.votes,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAccounts: () => dispatch(requestAccounts())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountShowPage)
