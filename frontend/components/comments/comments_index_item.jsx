import React from 'react';
import { Link } from 'react-router-dom';

class CommentsIndexItem extends React.Component {
  constructor(props){
    super(props);

  }

  render() {

    if (this.props.commentId) {
      return (
        <div className="comment-index-item">
          {this.props.body}
        </div>
      )
    } else { return null }
  }

}


export default CommentsIndexItem;
