import React from 'react';
import {values} from 'lodash';

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
    debugger
    if (posts.length > 0) {
        return (
          <div>
            <ul>
              {posts.map( (post) => <li>{post.title}</li> )}
           </ul>
          </div>
        )
      } else {
        return null;
      }
    }
  }

export default PostsIndex;
