import React from 'react';
import { Link } from 'react-router-dom';
import ImageItem from './image_item';

class PostShowPage extends React.Component {
  constructor(props){
    super(props);
    this.requestPost = this.props.requestPost.bind(this);
  }

  componentDidMount() {
    const id = parseInt(this.props.location.pathname.split('/')[2])
    this.requestPost(id);
  }

  render() {
    if (this.props.post) {
      const images = this.props.post.images;
      return (
        <div className="post_show_page_container">
          <div className="left-post-pad"></div>
          {this.props.post.title}
          {images.map( (image) => <ImageItem title={image.title} description={image.description}
            url={image.url} />)}
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default PostShowPage;
