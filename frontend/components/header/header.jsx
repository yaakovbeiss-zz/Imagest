import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);

  }



  render() {
    return (
      <div>
        <section className="nav">
          <div className="left-nav">
            <img className="imgur-header" src="https://imgur.com/images/access/access-logo.png"/>
          </div>

          <div className="right-nav">

          </div>
        </section>
      </div>
    );
  }

}

export default Header;
