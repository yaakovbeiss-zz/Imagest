import React from 'react';
import { createPost } from '../../actions/post_actions';

class NewPostForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state;
    createPost(post);
  }

  updateFile(e) {
    debugger

    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };
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

        </form>
      </div>
    )
  }

}

export default NewPostForm;
