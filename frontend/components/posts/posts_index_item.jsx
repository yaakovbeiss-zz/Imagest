import React from 'react';
import { Link } from 'react-router-dom';
import PostsIndexItemDetail from './post_index_item_detail';

class PostsIndexItem extends React.Component {
  constructor(props){
    super(props);

  }

  render() {

    if (this.props.postId) {
      return (
        <div className="post-index-item">
          <Link to={`/posts/${this.props.postId}`} >
            <img src={this.props.imageUrl}></img>
            <PostsIndexItemDetail title={this.props.title} />
          </Link>
        </div>
      )
    } else { return null }
  }

}


export default PostsIndexItem;
