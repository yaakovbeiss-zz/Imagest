import React from 'react';


class PostsIndexItemDetail extends React.Component {
  constructor(props){
    super(props);
    // this.requestImage = this.requestImage.bind(this);

  }

  render() {
    debugger
    {
      return (
        <div className="post-index-item-detail">
          {this.props.title}
          <div className="views">album</div>
        </div>
      )
     }
  }

}

export default PostsIndexItemDetail;
