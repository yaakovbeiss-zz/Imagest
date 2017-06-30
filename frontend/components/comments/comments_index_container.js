import { connect } from 'react-redux';
import CommentsIndex from './comments_index'
import { selectAllComments } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  
  return {
  comments: selectAllComments(state, ownProps.commentIds)
  }
};

export default connect(
  mapStateToProps,
  null
)(CommentsIndex)
