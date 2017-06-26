import React from 'react';
import { createPost } from '../../actions/post_actions';

class NewPostForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      post: {
        title: 'new post',
        description: 'posted with new form',
        account_id: 115,
      },
      image: {
        post_id: 63,
        title: 'posted with new post form',
        image: null,
      },
      imageUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state.post;
    const image = this.state.image;
    let formData = new FormData();
    formData.append("image[image]", this.state.image.image);
    formData.append("image[post_id]", this.state.image.post_id);
    formData.append("image[title]", this.state.image.title);

    this.props.createPost(post).then(
      (post) => {
        debugger
        formData.append('image[post_id]', post.post.id)
        return(this.props.createImage(formData))
      }
    );
    ;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateFile(e) {

    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState( { imageUrl: fileReader.result } );
      this.setState({ image: { image: file, post_id: 163, title: 'new post form title' } } );
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }


  }

  render() {
    return (
      <div>
        <form className="new-post-form">New Post Form
          <div>
            <input type="text" ></input>
            <input type="file" onChange={this.updateFile} />
            <img src={this.state.imageUrl} />
            <button onClick={this.handleSubmit}> Submit Post</button>
          </div>
        </form>
      </div>
    )
  }

}

export default NewPostForm;
