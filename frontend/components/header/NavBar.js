import React from 'react'
import Header from './header'


const NavBar = () => {
  const location = window.location.href.split('#/')[1]
  switch (location) {
    case "login":
      return null;
    case "signup":
      return null;
    default:
      return(<Header/>)
  }
}

export default NavBar;
