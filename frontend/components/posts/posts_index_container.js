import { connect } from 'react-redux';
import PostsIndex from './posts_index'
import { requestPosts } from '../../actions/post_actions';
import { selectAllPosts } from '../../reducers/selectors'

const mapStateToProps = state => ({
  posts: selectAllPosts(state),
});

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsIndex)
