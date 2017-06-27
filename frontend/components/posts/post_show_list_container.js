import { connect } from 'react-redux';
import PostShowList from './post_show_list';
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
)(PostShowList)
