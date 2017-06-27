import { connect } from 'react-redux';
import NewCommentForm from './new_comment_form';
import { createComment } from '../../actions/comment_actions';

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(
  null,
  mapDispatchToProps
)(NewCommentForm)
