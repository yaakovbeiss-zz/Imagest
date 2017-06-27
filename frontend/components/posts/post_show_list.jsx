import React from 'react';
import PostShowListItem from './post_show_list_item';

class PostShowList extends React.Component{
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
          <div className="sidebar-list-container">
            <div className="sidebar-list">
              <ul>

                {posts.map( (post) => <PostShowListItem key={post.id} title={post.title}
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

export default PostShowList;
