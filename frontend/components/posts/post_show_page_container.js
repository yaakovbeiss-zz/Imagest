import { connect } from 'react-redux';
import PostShowPage from './post_show_page';
import { requestPost } from '../../actions/post_actions';
import { toggleUpvote, toggleDownvote } from '../../actions/vote_actions';
import { hideSearchBar } from '../../actions/search_actions';

const mapStateToProps = ({ post, comment, session }, ownProps ) => {
  return {
    post: post.entities[post.currentPost],
    comment: comment.entities,
    accountId: session.currentaccount ? session.currentaccount.id : null,
    loggedIn: Boolean(session.currentaccount),
  }
};

const mapDispatchToProps = dispatch => ({
  requestPost: (id) => dispatch(requestPost(id)),
  toggleUpvote: (vote, voted) => dispatch(toggleUpvote(vote, voted)),
  toggleDownvote: (vote, voted) => dispatch(toggleDownvote(vote, voted)),
  hideSearchBar: (e) => dispatch(hideSearchBar(e)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShowPage)
