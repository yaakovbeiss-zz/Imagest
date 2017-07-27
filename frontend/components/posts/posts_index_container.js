import { connect } from 'react-redux';
import PostsIndex from './posts_index'
import { requestPosts } from '../../actions/post_actions';
import { selectAllPosts } from '../../reducers/selectors';
import { hideSearchBar } from '../../actions/search_actions';


const mapStateToProps = state => {

  return {
    posts: selectAllPosts(state),
    }
};

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  hideSearchBar: (e) => dispatch(hideSearchBar(e)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsIndex)
