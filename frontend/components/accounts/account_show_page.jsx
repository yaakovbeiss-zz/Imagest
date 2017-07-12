import React from 'react';
import PostsIndexItem from '../posts/posts_index_item';


class AccountShowPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    if (this.props.posts) {
      let posts = this.props.posts;
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
        return <div>No posts yet!</div>;
      }
    }
}

export default AccountShowPage;
