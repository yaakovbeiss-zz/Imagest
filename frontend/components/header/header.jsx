import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NewPostFormContainer from './new_post_form_container';
import MyModal from './my_modal';
import SearchBar from './search_bar';
import { hideSearchBar } from '../../actions/search_actions';

class Header extends React.Component {
  constructor(props){
    super(props);

  }

  handleClick(e){
    e.stopPropagation();
  }

  toggleDrop(e){
    let id = e.currentTarget.id;
    let dropdown = document.getElementById(`${id}-menu`);
    if (dropdown.className === `hidden`){
      dropdown.className = ``;
    } else {
      dropdown.className = `hidden`;
    }
  }

  render() {
    return (
      <div className="header-container" onClick={this.props.hideSearchBar}>
        <section className="header">
          <div className="left-nav">
            <Link to="/">
              <div className="icon-container">
                <img className="header-buttons imgur-header-icon" src={window.images.imgur_logo}/>

              </div>
            </Link>

              <MyModal />
                <div onClick={this.handleClick}>
                  <SearchBar />
                </div>
            </div>


        </section>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    hideSearchBar: (e) => dispatch(hideSearchBar(e)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Header);
