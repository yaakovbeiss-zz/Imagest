import { connect } from 'react-redux';
import NewCommentForm from './new_comment_form';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = ({ post }) => {
  return {
    currentPost: post.currentPost
  }
};

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCommentForm)
