import React from 'react';


class PostsIndexItem extends React.Component {
  constructor(props){
    super(props);
    // this.requestImage = this.requestImage.bind(this);
    // debugger
  }

  componentDidMount() {
    // const imageId = this.props.images.first.id
    // this.requestImage(id);
  }


  render() {
    debugger
    if (this.props.postId) {
      return (
        <div className="post-index-item">
          {this.props.title}
          <div>sup boi</div>
          <br />
          <img src={this.props.imageUrl}></img>
          {this.props.postId}

        </div>
      )
    } else { return null }
  }

}


export default PostsIndexItem;
