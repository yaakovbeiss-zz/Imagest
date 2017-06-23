import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import NewPostForm from './new_post_form';

class Header extends React.Component {
  constructor(props){
    super(props);

  }



  toggleDrop(e) {
    let id = e.currentTarget.id;
    let dropdown = document.getElementById(`${id}-menu`);
    if (dropdown.className === `hidden`){
      dropdown.className = ``;
    } else {
      dropdown.className = `hidden`;
    }
    // $(e.currentTarget).toggleClass('hidden');
  }

  closeDropDown(e) {
    let child = e.target.firstElementChild;
    child = $(child);
    // if (!e.target.id) {
    //   $('.dropdown').toggleClass('hidden', true);
    // }
  }

  render() {
    return (
      <div className="header-container" onClick={this.closeDropDown}>
        <section className="header">
          <div className="left-nav">
            <Link to="/">
              <div className="icon-container">
                <img className="header-buttons imgur-header-icon" src="https://imgur.com/images/access/access-logo.png"/>

              </div>
            </Link>
            <div className="header-buttons down-arrow" id="header-buttons-down-arrow" onClick={this.toggleDrop}>
              <div id="header-buttons-down-arrow-menu" className="hidden">
                <div className='dropdown home-button'>
                  <ul>
                    <li className="dropdown-item hiring"><a href="https://imgirrrrr.herokuapp.com/#/">Wadah's site</a></li>
                    <li className="dropdown-item"> <a href="https://selfiegram-app.herokuapp.com/">Martin's site</a> </li>
                    <li className="dropdown-item"> <a>about Imagest</a></li>
                    <li className="dropdown-item"> <a>imagest Store</a></li>
                    <li className="dropdown-item"> <a>imagest apps</a></li>
                    <li className="dropdown-item"> <a>developer api</a></li>
                    <li className="dropdown-item"> <a>advertise</a></li>
                    <li className="dropdown-item"> <a>need help?</a></li>
                    <li className="dropdown-item"> <a>asdf</a></li>
                  </ul>
                </div>
              </div>
              </div>
              <div className="header-buttons new-post-button-container">

                <img className="cloud" src={window.images.cloud_icon} />
                <a className="new-post-button">New post
                </a>
                <div className="down-arrow-new-post" id="down-arrow-new-post" onClick={this.toggleDrop}>
                  <div id="down-arrow-new-post-menu" className="hidden">
                    <div className='dropdown new-post'>
                      <ul>
                        <li className="dropdown-item"><a>Upload Images</a></li>
                        <li className="dropdown-item"><a>Video to GIF</a></li>
                        <li className="dropdown-item"><a>Make a Meme</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <div className="right-nav">
            <div className="search-icon-container" >
              <div className="icon-container">
                <img className="search-icon" id="search-icon" onClick={this.toggleDrop} src={window.images.search_icon}/>
              </div>
                <div id="search-icon-menu" className="dropdown hidden">
                  <input className="search-bar"></input>
                  <div className="search-bar search-bar-addition">SEARCH SYNTAX</div>
                </div>
            </div>
            <div className="signup-signin-links icon-container">
              <Link to="/login" className="right-nav-link"> sign in </Link>
              <Link to="/signup" className="right-nav-link"> sign up </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default Header;
