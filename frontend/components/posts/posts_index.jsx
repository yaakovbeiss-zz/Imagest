import React from 'react';
import {values} from 'lodash';
import GridList from './grid_list';
import PostsIndexItem from './posts_index_item';
import NewPostFormContainer from '../header/new_post_form_container';

class PostsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestPosts();
  }
  render(){
    
    let posts = this.props.posts;

    if (posts.length > 0) {
        return (
          <div className="post-index-container">
            <div className="post-index">
              <ul>

                {posts.map( (post) => <PostsIndexItem key={post.id} title={post.title}
                  imageUrl={post.image} postId={post.id} /> )}
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
