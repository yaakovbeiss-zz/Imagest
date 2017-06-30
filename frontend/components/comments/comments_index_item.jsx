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
    this.vote = this.vote.bind(this);
    this.handleSubmitUpvote = this.handleSubmitUpvote.bind(this);
    this.handleSubmitDownvote = this.handleSubmitDownvote.bind(this);

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
  vote(upOrDown){
    if(this.props.voted){
      return this.props.vote
    } else {
        const vote = {
        voter_id: this.props.accountId,
        votable_id: this.props.commentId,
        votable_type: 'Comment',
        vote_type: `${upOrDown}`,
      }
      return vote;
    }
  }
  handleSubmitUpvote(e){
    e.preventDefault();
    this.props.toggleUpvote(this.vote('Upvote'), this.props.voted)
  }
  handleSubmitDownvote(e){
    e.preventDefault();
    this.props.toggleDownvote(this.vote('Downvote'), this.props.voted)
  }

  render() {

    if (this.props.commentId) {
      return (
        <div className="container">
          <div className="comment-votes">
            <img onClick={ this.handleSubmitUpvote } src={window.images.upvote_icon} className="vote-arrow" ></img>
            <img onClick={this.handleSubmitDownvote} src={window.images.downvote_icon} className="vote-arrow"></img>
          </div>
          <div className="comment-index-item">
            <div className="comment-body-container">
              <div className="comment-item-info">
                <div className="username">{this.props.username}</div>
                <div className="username">{this.props.points} pts</div>
              </div>
              <div  className="comment-body">
                {this.props.body}


                <button onClick={this.toggle} className="reply-button">reply</button>
              </div>

            </div>
          </div>
          <button className="replies-button" onClick={this.toggleChild}>{this.repliesCount()}</button>
          {this.form()}
          {this.childComments()}
        </div>
      )
    } else { return null }
  }

}


export default CommentsIndexItem;
