import { connect } form 'react-redux';
import PostsIndexItem from './posts_index_item';
import { requestImage } from '../../actions/image_actions';

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  requestImage: (id) => dispatch(requestImage(id))
});

export default connect(
  null,
  mapDispatchToProps
)(PostIndexItem)
