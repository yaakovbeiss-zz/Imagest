import React from 'react';
import { createPost } from '../../actions/post_actions';
import Dropzone from 'react-dropzone';

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

    let file = e[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ image: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }

  }

  render() {
      if(!this.state.imageUrl){
        return (
          <div>
            <form className="new-post-form-container" >
              <div className="form-title"></div>
              <div className="new-post-form">
                <Dropzone
                  onDrop={this.updateFile}
                  className='dropzone'>
                  <img src={window.images.cloud_icon}></img>
                </Dropzone>Click above to browse or drag and drop images inside

                <div className="new-post-form-bottom"></div>
              </div>
            </form>
          </div>
        )
      } else {
        return (
          <div>
            <form className="new-post-form-container" >
              <div className="form-title"></div>
              <div className="new-post-form">
                <img className="uploaded-image" src={this.state.imageUrl} />


                <input type="text" className="new-post-form-title" onChange={this.update('title')} value={this.state.title}
                  placeholder="Enter a title:"></input>

                <input type="text" className="new-post-form-description" onChange={this.update('description')} value={this.state.description}
                  placeholder="Enter a description:"></input>

                <button className=""onClick={this.handleSubmit}> Submit Post</button>
                <div className="new-post-form-bottom"></div>
              </div>
            </form>

          </div>
        )
      }

  }

}

export default NewPostForm;
