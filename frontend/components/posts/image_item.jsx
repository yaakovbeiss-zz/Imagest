import React from 'react';

class ImageItem extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    debugger
    if (this.props.title) {

      return (
        <div>
          {this.props.title}
          <img src={this.props.url}></img>
          {this.props.description}
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default ImageItem;
