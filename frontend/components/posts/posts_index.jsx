import React from 'react';
import {values} from 'lodash';
import GridList from './grid_list';
import PostsIndexItem from './posts_index_item';
import Modal from '../modal/modal';
import NewPostForm from '../header/new_post_form';

class PostsIndex extends React.Component{
  constructor(props){
    super(props);
    this.requestPosts = this.props.requestPosts.bind(this);
  }

  componentDidMount(){
    this.requestPosts();
  }
  render(){
    let posts = this.props.posts;

    if (posts.length > 0) {
        return (
          <div className="post-index-container">
            <div className="post-index">
              <Modal />
              <NewPostForm />
              <ul>
                sup
                {posts.map( (post) => <PostsIndexItem key={post.id} title={post.title}
                  imageUrl={post.image_url} postId={post.id} /> )}
             </ul>
            </div>
          </div>
        )
      } else {
        return null;
      }
    }
  }

export default PostsIndex;
