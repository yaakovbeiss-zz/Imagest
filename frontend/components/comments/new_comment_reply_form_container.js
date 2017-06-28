import { connect } from 'react-redux';
import NewCommentReplyForm from './new_comment_reply_form';
import { createComment } from '../../actions/comment_actions';

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(
  null,
  mapDispatchToProps
)(NewCommentReplyForm)
