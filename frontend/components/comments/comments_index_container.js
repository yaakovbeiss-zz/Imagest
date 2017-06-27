import { connect } from 'react-redux';
import CommentsIndex from './comments_index'
import { selectAllComments } from '../../reducers/selectors';

const mapStateToProps = state => ({
  comments: selectAllComments(state)
});

export default connect(
  mapStateToProps,
  null
)(CommentsIndex)
