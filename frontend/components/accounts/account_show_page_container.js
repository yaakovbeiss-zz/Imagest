import { connect } from 'react-redux';
import AccountShowPage from './account_show_page';

const mapStateToProps = ({ session }, ownProps ) => {
  return {
    posts: session.currentaccount.posts,
    comments: session.currentaccount.comments,
    votes: session.currentaccount.votes,
  }
};

export default connect(
  mapStateToProps,
  null
)(AccountShowPage)
