import React from 'react';
import PostsIndexItem from '../posts/posts_index_item';
import LeaderBoardIndex from './leader_board_index';


class AccountShowPage extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAccounts();
    const id = parseInt(this.props.match.params.accountId);
    this.props.requestAccount(id);
  }

  postsName(){
    if(parseInt(this.props.match.params.accountId) === this.props.currentaccountId){
      return ( <div> My Posts</div>)
    } else {
      return (<div>Someone elses posts</div>)
    }
  }

  render(){

    if (this.props.posts) {
      let posts = this.props.posts;
      let accounts = this.props.accounts;
        return (
          <div className="post-index-container">

            <div className="post-index account-show">
              {this.postsName()}
              <ul>
                {posts.map( (post) => <PostsIndexItem key={post.id} title={post.title}
                  imageUrl={post.image} postId={post.id} /> )}
             </ul>
            </div>

            <div className="leader-board">
              <ul>
                <LeaderBoardIndex accounts={accounts}/>
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
