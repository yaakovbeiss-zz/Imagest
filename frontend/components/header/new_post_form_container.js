import { connect } from 'react-redux';
import NewPostForm from './new_post_form';
import { createPost } from '../../actions/post_actions';
import { createImage } from '../../actions/image_actions';

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
  createImage: (image) => dispatch(createImage(image)),
});

export default connect(
  null,
  mapDispatchToProps
)(NewPostForm)
