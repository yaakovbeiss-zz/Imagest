import React from 'react';


class ImageIndexItem extends React.Component {
  constructor(props){
    super(props);
  }


}

render() {
  return (
      <div className="">
        {this.props.title}
        {this.props.description}
        {this.props.post_id}
        {this.props.image_url}
        }
      </div>
    )
  }
}


export default ImageIndexItem;
