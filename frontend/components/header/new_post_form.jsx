import React from 'react';
import { createPost } from '../../actions/post_actions';

class NewPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state;
    createPost(post);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState( { imageFile: file, imageUrl: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div>
        <form>New Post Form
          <input type="text" ></input>
          <input type="file" onChange={this.updateFile} />
          <img src={this.state.imageUrl} />
          <button onClick={this.handleSubmit}>Upload Post!</button>
        </form>
      </div>
    )
  }

}

export default NewPostForm;
