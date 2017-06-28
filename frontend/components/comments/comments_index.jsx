import React from 'react';
import CommentsIndexItem from './comments_index_item';


class CommentsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    let comments = this.props.comments;

    if (comments.length > 0) {
        return (
          <div className="comment-index-container">
            <div className="comment-index">
              <ul>
                {comments.map( (comment) => <CommentsIndexItem key={comment.id} body={comment.body}
                  commentId={comment.id} points={comment.points} commenterId={comment.commenter_id}
                  commentIds={comment.comment_ids}/> )}
             </ul>
            </div>
          </div>
        )
      } else {
        return null;
      }
    }
  }

export default CommentsIndex;
