import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  toggleDropDown(e) {
    let dropdown = document.getElementById("dropdown-arrow");
    // debugger
    if (dropdown.className === 'dropdown hidden'){
      dropdown.className = 'dropdown';
    } else {
      dropdown.className = 'dropdown hidden';
    }
  }

  render() {
    return (
      <div>
        <section className="header">
          <div className="left-nav">
            <Link to="/">
              <div className="icon-container">
                <img className="header-buttons imgur-header-icon" src="https://imgur.com/images/access/access-logo.png"/>
              </div>
            </Link>
            <div className="header-buttons down-arrow" onClick={this.toggleDropDown}>
              <div className='dropdown hidden' id="dropdown-arrow">
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

          <div className="right-nav">

          </div>
        </section>
      </div>
    );
  }

}

export default Header;
