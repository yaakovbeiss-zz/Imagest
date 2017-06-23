import React from 'react';

class ImagesIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let images = this.props.images;
    
    if (images.length > 0) {
        return (
          <div className="post-index-container">
            <div className="post-index">
              <ul>
                {images.map( (post) => <ImageIndexItem title={image.title}
                  description={image.description} post_id={image.post_id}
                  image_url={image.imagel}
                  /> )}
             </ul>
            </div>
          </div>
        )
      } else {
        return null;
      }
    }

}

export default ImagesIndex;
