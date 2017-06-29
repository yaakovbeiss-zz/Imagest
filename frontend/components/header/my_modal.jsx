import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modal_actions';
import NewPostFormContainer from './new_post_form_container';

class MyModal extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.isOpen) {
        return (
          <div className="modal">
            
              <NewPostFormContainer />

          </div>
        );
    } else { return null; }
  }
}

const mapStateToProps = ({ modal }) => ({
  isOpen: modal,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyModal);
