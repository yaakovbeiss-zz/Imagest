import { connect } from 'react-redux';
import CommentsIndexItem from './comments_index_item';
import { toggleUpvote, toggleDownvote } from '../../actions/vote_actions';

const mapStateToProps = ({ session }) => {

  return {
    accountId: session.currentaccount ? session.currentaccount.id : null
  }
};

const mapDispatchToProps = dispatch => {

  return {
    toggleUpvote: (vote, voted) => dispatch(toggleUpvote(vote, voted)),
    toggleDownvote: (vote, voted) => dispatch(toggleDownvote(vote, voted)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndexItem)
