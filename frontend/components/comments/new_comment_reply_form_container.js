import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewCommentReplyForm from './new_comment_reply_form';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = ({ post, session }) => {
  const currentaccountId = session.currentaccount ? session.currentaccount.id : null
  return {
    currentPost: post.currentPost,
    loggedIn: Boolean(session.currentaccount),
    currentaccountId,
  }
};

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCommentReplyForm))
