import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewPostForm from './new_post_form';
import { createPost } from '../../actions/post_actions';
import { createImage } from '../../actions/image_actions';


const mapStateToProps = ({ session }, ownProps) => {
  return {
    currentaccount: session.currentaccount
  }
};

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
  createImage: (image) => dispatch(createImage(image)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostForm))
