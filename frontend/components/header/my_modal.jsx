import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleModal } from '../../actions/modal_actions';
import NewPostFormContainer from './new_post_form_container';

class MyModal extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.props.loggedIn){
      this.props.toggleModal(e);
    } else {
      this.props.history.push('/login');
    }
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  render(){
    if(this.props.isOpen) {
        return (
          <div>
            <button  onClick={this.handleSubmit} className="header-buttons new-post-button-container ">
              <img className="cloud" src={window.images.cloud_icon} />
              <div className="new-post-button">New post</div>
            </button>
            <div className="full-screen-absolute">
              <div className="modal-container" onClick={this.handleSubmit}>
                <div className="modal" onClick={this.stopPropagation}>
                    <NewPostFormContainer toggleModal={this.props.toggleModal} />
                </div>
              </div>
            </div>
          </div>
        );
    } else {
      return (
        <button  onClick={this.handleSubmit} className="header-buttons new-post-button-container ">
          <img className="cloud" src={window.images.cloud_icon} />
          <div className="new-post-button">New post</div>
        </button>
        )
      }
  }
}

const mapStateToProps = ({ session, modal }) => ({
  loggedIn: Boolean(session.currentaccount),
  isOpen: modal,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: (e) => dispatch(toggleModal(e)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyModal));
