import React from 'react';
import { createComment } from '../../actions/comment_actions';

class NewCommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: '',
      commenter_id: 147,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = { body: this.state.body,
      commenter_id: this.state.commenter_id,
      commentable_id: this.props.commentableId,
      commentable_type: this.props.commentableType,
      post_id: this.props.currentPost,
    };
    this.props.createComment(comment);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
     });
  }

  render() {
    return (
      <div>
        <form className="new-comment-form">
          <div >
            <input type="text" className="comment-input" placeholder="Write a comment" onChange={this.update('body')} value={this.state.body}></input>
            <div className="comment-details-container">
                <div className="char-counter">140</div>
                <button onClick={this.handleSubmit} className="comment-button">Post</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

}

export default NewCommentForm;
