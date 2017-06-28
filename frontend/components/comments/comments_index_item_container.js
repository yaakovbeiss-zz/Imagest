import { connect } from 'react-redux';
import CommentsIndexItem from './comments_index_itemn'
import { selectChildComments } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    username: state.session.currentaccount.username,
    comments: selectChildComments(state) || []
  }
};

export default connect(
  mapStateToProps,
  null
)(CommentsIndexItem)
