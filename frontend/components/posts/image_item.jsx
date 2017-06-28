import React from 'react';

class ImageItem extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

    if (this.props.id) {
      return (
        <div>
          <div className="image-item-container">
            <img src={this.props.url} className="image-item"></img>

          </div>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default ImageItem;
