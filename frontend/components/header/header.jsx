import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);

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
            <div className="header-buttons down-arrow">
              <div className={dropdown} onClick={toggleDropDown}>
                <ul>
                  <li className="hiring"></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
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
