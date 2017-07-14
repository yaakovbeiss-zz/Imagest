import React from 'react';
import { Link } from 'react-router-dom';
import NewPostFormContainer from './new_post_form_container';
import MyModal from './my_modal';
import SearchBar from './search_bar';

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
  }

  render() {
    return (
      <div className="header-container">
        <section className="header">
          <div className="left-nav">
            <Link to="/">
              <div className="icon-container">
                <img className="header-buttons imgur-header-icon" src={window.images.imgur_logo}/>

              </div>
            </Link>
            
              <MyModal />

                <SearchBar />
            </div>


        </section>
      </div>
    );
  }

}

export default Header;
