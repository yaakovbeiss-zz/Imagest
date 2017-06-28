import React from 'react';
import NewCommentReplyFormContainer from './new_comment_reply_form_container';
import { Link } from 'react-router-dom';
import CommentsIndexContainer from './comments_index_container';

class CommentsIndexItem extends React.Component {
  constructor(props){
    super(props);

  }

  render() {

    if (this.props.commentId) {
      return (
        <div>
          <div className="comment-index-item">
            <div className="comment-body-container">
              <div className="comment-item-info">
                <div className="username">username</div>
                <div className="username">9001 pts</div>
              </div>
              <div  className="comment-body">
                {this.props.body}
              </div>
              <div className="comment-gradient-wrapper"></div>

            </div>
          </div>
          <CommentsIndexContainer commentIds={this.props.commentIds} />
          <NewCommentReplyFormContainer commentableId={this.props.commentId}
            commentableType='Comment' />
        </div>
      )
    } else { return null }
  }

}


export default CommentsIndexItem;
