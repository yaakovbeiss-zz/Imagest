import React from 'react';
import { Link } from 'react-router-dom';
import ImageItem from './image_item';
import PostsIndexContainer from '../posts/posts_index_container';

class PostShowPage extends React.Component {
  constructor(props){
    super(props);
    this.requestPost = this.props.requestPost.bind(this);
  }

  componentDidMount() {
    const id = parseInt(this.props.location.pathname.split('/')[2])
    this.requestPost(id);
  }

  render() {
    debugger
    if (this.props.post) {
      const images = this.props.post.images;
      return (
        <div className="post-show-page-container">
          <div className="post-show-page">
            <div className="left-post-pad">
              <div className="show-page-title">
                {this.props.post.title}
                <button className="button prev-post">
                  <img src={window.images.left_arrow_icon}></img>
                </button>
                <button className="button next-post">Next Post
                  <img src={window.images.right_arrow_icon}></img>
                </button>
              </div>
            {images.map( (image) => <ImageItem title={image.title} description={image.description}
              url={image.url} />)}
              <div className="post-description">
                
              </div>
            </div>
            <div className="right-post-pad">
              <PostsIndexContainer />
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
