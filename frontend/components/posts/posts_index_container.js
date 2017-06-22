import { connect } from 'react-redux';
import PostsIndex from './posts_index'
import { requestPosts } from '../../actions/post_actions';
import { selectAllposts } from '../../reducers/selectors'

const mapStateToProps = state => ({
  posts: selectAllposts(state),

});

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsIndex)
