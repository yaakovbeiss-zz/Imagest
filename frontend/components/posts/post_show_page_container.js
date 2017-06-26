import { connect } from 'react-redux';
import PostShowPage from './post_show_page';
import { requestPost } from '../../actions/post_actions';

const mapStateToProps = ({ post }) => ({
  post: post.entities[post.currentPost],
});


const mapDispatchToProps = dispatch => ({
  requestPost: (id) => dispatch(requestPost(id))
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShowPage)
