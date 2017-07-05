import React from 'react';
import NewCommentReplyFormContainer from './new_comment_reply_form_container';
import { Link } from 'react-router-dom';
import CommentsIndexContainer from './comments_index_container';

class CommentsIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hideForm: true,
      hidechild: true,

    }
    this.toggle = this.toggle.bind(this);
    this.toggleChild = this.toggleChild.bind(this);
    this.repliesCount = this.repliesCount.bind(this);
    this.vote = this.vote.bind(this);
    this.handleSubmitUpvote = this.handleSubmitUpvote.bind(this);
    this.handleSubmitDownvote = this.handleSubmitDownvote.bind(this);
    this.toggle = this.toggle.bind(this)
    this.toggleChild = this.toggleChild.bind(this);
    this.revealVotes = this.revealVotes.bind(this);
  }

  toggle(){
    this.setState({ hideForm: !this.state.hideForm })
  }
  toggleChild(){
    this.setState({ hidechild: !this.state.hidechild })
  }
  form(){
    return this.state.hideForm ? <div></div> :
    <NewCommentReplyFormContainer toggle={this.toggle} toggleChild={this.toggleChild} commentableId={this.props.commentId}
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
  revealVotes(){
        if(this.props.voted){
          if(this.props.vote.vote_type === 'Upvote'){
            return (
              <div className="comment-votes">
                <img onClick={ this.handleSubmitUpvote } src={window.images.upvote_icon} className="vote-arrow" ></img>
                <img onClick={this.handleSubmitDownvote} src={window.images.grey_down_icon} className="vote-arrow"></img>
              </div>
            )
          } else {
            return(
              <div className="comment-votes">
                <img onClick={ this.handleSubmitUpvote } src={window.images.grey_up_icon} className="vote-arrow" ></img>
                <img onClick={this.handleSubmitDownvote} src={window.images.downvote_icon} className="vote-arrow"></img>
              </div>
            )
          }
        } else {
          return (
            <div className="comment-votes">
              <img onClick={ this.handleSubmitUpvote } src={window.images.grey_up_icon} className="vote-arrow" ></img>
              <img onClick={this.handleSubmitDownvote} src={window.images.grey_down_icon} className="vote-arrow"></img>
            </div>
          )
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
    if (this.props.loggedIn){
      this.props.toggleUpvote(this.vote('Upvote'), this.props.voted)
    } else {
      this.props.history.push('/login');
    }
  }
  handleSubmitDownvote(e){
    e.preventDefault();
    if (this.props.loggedIn){
      this.props.toggleDownvote(this.vote('Downvote'), this.props.voted)
    } else {
      this.props.history.push('/login');
    }
  }

  render() {

    if (this.props.commentId) {
      return (
        <div className="container" onMouseEnter={this.toggleVotes} onMouseLeave={this.toggleVotes}>
          {this.revealVotes()}

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
