import React from 'react';
import NewCommentFormContainer from './new_comment_form_container';
import { Link } from 'react-router-dom';

class CommentsIndexItem extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    
    if (this.props.commentId) {
      return (
        <div className="comment-index-item">
          {this.props.body}
          <NewCommentFormContainer commentableId={this.props.commentId} commentableType="Comment" />
        </div>
      )
    } else { return null }
  }

}


export default CommentsIndexItem;
