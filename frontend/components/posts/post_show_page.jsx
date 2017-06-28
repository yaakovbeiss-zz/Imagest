import React from 'react';
import { Link } from 'react-router-dom';
import ImageItem from './image_item';
import PostShowListContainer from './post_show_list_container';
import CommentsIndexContainer from '../comments/comments_index_container';
import NewCommentFormContainer from '../comments/new_comment_form_container';

class PostShowPage extends React.Component {
  constructor(props){
    super(props);
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

  render() {


    if (this.props.post) {
      const images = this.props.post.images;
      return (
        <div className="post-show-page-container">
          <div className="post-show-page">
            <div className="left-post-pad">
              <div className="show-page-title-container">
                <div className="show-page-title">
                  {this.props.post.title}
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
            {images.map( (image) => <ImageItem key={image.id} title={image.title} description={image.description}
              url={image.url} />)}
              <div className="post-description">
                <div className="post-actions-container">
                  <div className="post-actions-left">
                    <img src={window.images.upvote_icon} className="post-actions-action" ></img>
                    <img src={window.images.downvote_icon} className="post-actions-action"></img>
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
                {this.props.post.description}
              </div>
              <NewCommentFormContainer commentableId={this.props.post.id} commentableType="Post" />
              <CommentsIndexContainer />
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
