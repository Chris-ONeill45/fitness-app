import React from 'react';
import MenuDropDown from './MenuDropDown';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <MenuDropDown />
      </div>
      <div className="navbar-logo">logo</div>
    </nav>
  );
};

export default NavBar;
