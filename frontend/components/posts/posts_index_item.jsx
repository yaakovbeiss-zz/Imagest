import React from 'react';
import PostsIndexItemDetail from './post_index_item_detail';

class PostsIndexItem extends React.Component {
  constructor(props){
    super(props);
    // this.requestImage = this.requestImage.bind(this);
    // debugger

  }

  render() {

    if (this.props.postId) {
      return (
        <div className="post-index-item">
          <img src={this.props.imageUrl}></img>
          <PostsIndexItemDetail title={this.props.title} />
        </div>
      )
    } else { return null }
  }

}


export default PostsIndexItem;
