import React from 'react';
import NewCommentReplyFormContainer from './new_comment_reply_form_container';
import { Link } from 'react-router-dom';
import CommentsIndexContainer from './comments_index_container';

class CommentsIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: true,
      hidechild: true,
    }
    this.toggle = this.toggle.bind(this);
    this.toggleChild = this.toggleChild.bind(this);
    this.repliesCount = this.repliesCount.bind(this);
  }

  toggle(){
    this.setState({ hidden: !this.state.hidden })
  }
  toggleChild(){
    this.setState({ hidechild: !this.state.hidechild })
  }
  form(){
    return this.state.hidden ? <div></div> :
    <NewCommentReplyFormContainer commentableId={this.props.commentId}
      commentableType='Comment' />
  }
  childComments(){
      return this.state.hidechild ? <div></div> :
      <CommentsIndexContainer commentIds={this.props.commentIds} />
  }
  repliesCount(){
    if(this.props.commentIds.length > 0){
      return <div>{this.state.hidechild ? "+ " : "- "}{this.props.commentIds.length} replies</div>
    }
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
                <button onClick={this.toggle} className="reply-button">reply</button>
              </div>
              <div className="comment-gradient-wrapper"></div>
            </div>
          </div>
          <button className="replies-button" onClick={this.toggleChild}>{this.repliesCount()}</button>
          {this.childComments()}
          {this.form()}
        </div>
      )
    } else { return null }
  }

}


export default CommentsIndexItem;
