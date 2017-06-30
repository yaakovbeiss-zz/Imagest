import React from 'react';
import { createPost } from '../../actions/post_actions';

class NewPostForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      image: null,
      imageUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = { title: this.state.title, description: this.state.description }
    const image = this.state.image;
    let formData = new FormData();

    formData.append("image[image]", this.state.image);

    this.props.createPost(post).then(
      (post) => {
        formData.append('image[post_id]', post.payload.post.id)
        return(this.props.createImage(formData).then(
          response => {
            if (response.image.id) {
              this.props.history.push(`/posts/${response.image.post_id}`);
            }
          }
        ).then(()=> this.props.toggleModal(e))
      )
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
      this.setState({ image: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }

  }

  render() {
    return (
      <div>
        <form className="new-post-form-container" >
          <div className="form-title"></div>
          <div className="new-post-form">
            Enter a title:
            <input type="text" className="new-post-form-title" onChange={this.update('title')} value={this.state.title}></input>
            Enter a description:
            <input type="text" className="new-post-form-description" onChange={this.update('description')} value={this.state.description}></input>
            <input className="" type="file" onChange={this.updateFile} />
            <img className="" src={this.state.imageUrl} />
            <button className=""onClick={this.handleSubmit}> Submit Post</button>
            <div className="new-post-form-bottom"></div>
          </div>
        </form>
      </div>
    )
  }

}

export default NewPostForm;
