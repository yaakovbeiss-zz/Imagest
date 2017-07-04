import React from 'react';



class AccountShowPage extends React.Component{
  constructor(props){
    super(props);
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

export default AccountShowPage;
