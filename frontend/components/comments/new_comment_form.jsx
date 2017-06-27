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
      commentable_type: this.props.commentableType
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
        <form className="new-comment-form">Write a comment
          <div>
            <input type="text" onChange={this.update('body')} value={this.state.body}></input>
            <button onClick={this.handleSubmit}>Post</button>
          </div>
        </form>
      </div>
    )
  }

}

export default NewCommentForm;
