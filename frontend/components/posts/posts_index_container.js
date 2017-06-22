import { connect } from 'react-redux';

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
