import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);

  }

  toggleDrop(e) {
    let id = e.currentTarget.className;
    let dropdown = document.getElementById(`${id}`);

    if (dropdown.className === `hidden`){
      dropdown.className = ``;
    } else {
      dropdown.className = `hidden`;
    }


  }

  render() {
    return (
      <div className="header-container">
        <section className="header">
          <div className="left-nav">
            <Link to="/">
              <div className="icon-container">
                <img className="header-buttons imgur-header-icon" src="https://imgur.com/images/access/access-logo.png"/>
              </div>
            </Link>
            <div className="header-buttons down-arrow" onClick={this.toggleDrop}>
              <div id="header-buttons down-arrow" className="hidden">
                <div className='dropdown home-button'>
                  <ul>
                    <li className="dropdown-item hiring"><a>we're hiring!</a></li>
                    <li className="dropdown-item"> <a>blog</a> </li>
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
                <img className="cloud" src="/assets/cloud.png" />
                <a className="new-post-button">New post
                </a>
                <a className="down-arrow-new-post" onClick={this.toggleDrop}>
                  <div id="down-arrow-new-post" className="hidden">
                    <div className='dropdown new-post'>
                      <ul>
                        <li className="dropdown-item"><a>Upload Images</a></li>
                        <li className="dropdown-item"><a>Video to GIF</a></li>
                        <li className="dropdown-item"><a>Make a Meme</a></li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          <div className="right-nav">
            <div className="search-icon-container" onClick={this.toggleDrop}>
              <img className="search-icon" src="/assests/search_icon.png"/>
                <div id="search-icon-container" className="hidden">
                  <input className="search-bar"></input>
                  <div className="search-bar search-bar-addition">SEARCH SYNTAX</div>
                </div>
            </div>
            <div className="signup-signin-links icon-container">
              <Link exact to="/login" className="right-nav-link"> sign in </Link>
              <Link exact to="/signup" className="right-nav-link"> sign up </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default Header;
