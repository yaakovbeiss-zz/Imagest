import React from 'react';
import {values} from 'lodash';

class PostsIndex extends React.Component{
  constructor(props){
    super(props);
    this.requestPosts = this.props.requestPosts.bind(this);
  }

  componentDidMount(){
    this.requestPosts();
    // debugger
  }
  render(){
    let posts = values(this.props.post.entities)
    debugger
      if (posts.length > 0) {

      return (
        <div>
          <ul>

            {posts[0].title}
         </ul>
        </div>
      )
    } else {
      return null;
    }

  }
}
export default PostsIndex;
