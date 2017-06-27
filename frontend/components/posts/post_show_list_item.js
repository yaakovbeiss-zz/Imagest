import React from 'react';
import { Link } from 'react-router-dom';


class PostShowListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    if (this.props.postId) {
      return (
        <div>
          <Link to={`/posts/${this.props.postId}`} >
            <div className="sidebar-item">
              <img className="sidebar-image" src={this.props.imageUrl}></img>
              <div className="sidebar-item-title">{this.props.title}</div>
            </div>
          </Link>
        </div>
      )
    } else { return null }
  }

}


export default PostShowListItem;
