import React from 'react';
import { Link } from 'react-router-dom';
import ImageItem from './image_item';
import PostShowListContainer from './post_show_list_container';
import CommentsIndexContainer from '../comments/comments_index_container';
import NewCommentFormContainer from '../comments/new_comment_form_container';

class PostShowPage extends React.Component {
  constructor(props){
    super(props);
    this.prevPost = this.prevPost.bind(this);
    this.nextPost = this.nextPost.bind(this);
    this.commentsCount = this.commentsCount.bind(this);
    this.vote = this.vote.bind(this);
    this.handleSubmitUpvote = this.handleSubmitUpvote.bind(this);
    this.handleSubmitDownvote = this.handleSubmitDownvote.bind(this);

  }

  componentDidMount() {
    const id = parseInt(this.props.location.pathname.split('/')[2])
    this.props.requestPost(id);
  }

  componentWillReceiveProps(nextProps){
    const oldId = this.props.match.params.postId
    const nextId = nextProps.match.params.postId
    if(oldId !== nextId){
      this.props.requestPost(nextId);
    }
  }

  prevPost(){
    const id = this.props.match.params.postId - 1;
    this.props.history.push(`/posts/${id}`);
  }
  nextPost(){
    const id = parseInt(this.props.match.params.postId) + 1;
    this.props.history.push(`/posts/${id}`);
  }
  commentsCount(){
    if(this.props.comment){
      return <div>{Object.keys(this.props.comment).length}</div>
    }
  }
  vote(upOrDown){
    if(this.props.post.voted){
      return this.props.post.vote
    } else {
        const vote = {
        voter_id: this.props.accountId,
        votable_id: this.props.post.id,
        votable_type: 'Post',
        vote_type: `${upOrDown}`,
      }
      return vote;
    }
  }

  handleSubmitUpvote(e){
    e.preventDefault();
    if (this.props.loggedIn){
      this.props.toggleUpvote(this.vote('Upvote'), this.props.post.voted)
    } else {
      this.props.history.push('/login');
    }
  }
  handleSubmitDownvote(e){
    e.preventDefault();
    if (this.props.loggedIn){
      this.props.toggleDownvote(this.vote('Downvote'), this.props.post.voted)
    } else {
      this.props.history.push('/login');
    }
  }
  voteIcon(){
    if(this.props.post.voted){
      debugger
      if(this.props.post.vote.vote_type === 'Upvote'){
        return (
          <div>
            <img onClick={ this.handleSubmitUpvote } src={window.images.upvote_icon} className="post-actions-action upvote" ></img>
            <img onClick={this.handleSubmitDownvote} src={window.images.grey_down_icon} className="post-actions-action downvote"></img>
          </div>
        )
      } else {
          <div>
            <img onClick={ this.handleSubmitUpvote } src={window.images.grey_up_icon} className="post-actions-action upvote" ></img>
            <img onClick={this.handleSubmitDownvote} src={window.images.downvote_icon} className="post-actions-action downvote"></img>
          </div>
      }
    } else {
      return (
        <div>
          <img onClick={ this.handleSubmitUpvote } src={window.images.grey_up_icon} className="post-actions-action upvote" ></img>
          <img onClick={this.handleSubmitDownvote} src={window.images.grey_down_icon} className="post-actions-action downvote"></img>
        </div>
        )
    }
  }


  render() {


    if (this.props.post) {
      const images = this.props.post.images;
      return (
        <div className="post-show-page-container">
          <div className="post-show-page">
            <div className="left-post-pad">
              <div className="show-page-title-container">
                <div className="show-page-title">
                  <div className="title">
                    {this.props.post.title}
                    <div className="by-username">by
                      <div className="username">{this.props.post.username}</div>
                    </div>
                  </div>
                  <div className="prev-next">
                    <button className="button prev-post" onClick={this.prevPost}>
                      <img src={window.images.left_arrow_icon}></img>
                    </button>
                    <button className="button next-post" onClick={this.nextPost}>Next Post
                      <img src={window.images.right_arrow_icon}></img>
                    </button>
                  </div>
                </div>
              </div>
            {images.map( (image) => <ImageItem key={image.id} url={image.url} id={image.id}/>)}
              <div className="post-description">
                <div>{this.props.post.description}</div>
                <div className="post-actions-container">
                  <div className="post-actions-left">

                    {this.voteIcon()}
                    <img src={window.images.heart_icon} className="post-actions-action"></img>
                  </div>
                  <div className="post-actions-right">
                    <img src={window.images.facebook_action} className="post-actions-social" ></img>
                    <img src={window.images.twitter_action} className="post-actions-social"></img>
                    <img src={window.images.pinterest_action} className="post-actions-social"></img>
                    <img src={window.images.reddit_action} className="post-actions-social"></img>
                    <img src={window.images.menu_action} className="post-actions-social last-menu"></img>
                  </div>
                </div>
                <div>{this.props.post.points} points</div>
              </div>
              <div className="comments-info">
                <div className="comments-count">{this.commentsCount()} COMMENTS</div>
                <div className="comments-info-right">
                  <div className="best-comments">Best</div>
                  <div className="expand-comments">Expand All</div>
                </div>
              </div>
              <NewCommentFormContainer commentableId={this.props.post.id} commentableType="Post" />
              <CommentsIndexContainer  commentIds={this.props.post.comment_ids} />
            </div>
            <div className="right-post-pad">
              <PostShowListContainer />
            </div>
          </div>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default PostShowPage;
