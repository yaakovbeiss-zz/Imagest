import { connect } from 'react-redux';
import PostsShowList from './posts_show_list';
import { requestPosts } from '../../actions/post_actions';
import { selectAllPosts } from '../../reducers/selectors'

const mapStateToProps = state => {

  return {
    posts: selectAllPosts(state),
    }
};

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsShowList)
