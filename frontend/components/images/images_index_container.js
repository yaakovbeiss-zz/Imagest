import { connect } from 'react-redux';
import ImagesIndex from './images_index'
import { requestImages } from '../../actions/image_actions';
import { selectAllImages } from '../../reducers/selectors'

const mapStateToProps = state => ({
  images: selectAllImages(state),
});

const mapDispatchToProps = dispatch => ({
  requestImages: () => dispatch(requestImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesIndex)
