import { connect } from 'react-redux';
import PostsIndex from './posts_index'
import { requestPosts } from '../../actions/post_actions';


const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsIndex)
