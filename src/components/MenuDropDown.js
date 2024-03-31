import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-dropdown">
      <button className="dropdown-button" type="button" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuDropDown;
