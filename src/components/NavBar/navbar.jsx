import React, { useState } from 'react';
import './navbar.css';
import logo from '../../../public/logo.png';
import { Link } from 'react-scroll';
import menu from '../../../public/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link 
          activeClass="active" 
          to="Home" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link 
          activeClass="active" 
          to="Portfolio" 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link 
          activeClass="active" 
          to="Publications" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="desktopMenuListItem"
        >
          Publications
        </Link>
      </div>
      <a href="mailto:mosadoluwamorphing@gmail.com" className="desktopMenuBtn">
        Send a Mail
      </a>

      {/* Hamburger menu */}
      <img 
        src={menu} 
        alt="Menu" 
        className="mobMenu" 
        onClick={() => setShowMenu(!showMenu)} 
      />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link 
          activeClass="active" 
          to="Home" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="listItem" 
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link 
          activeClass="active" 
          to="Portfolio" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          className="listItem" 
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link 
          activeClass="active" 
          to="Publications" 
          spy={true} 
          smooth={true} 
          offset={-5} 
          duration={500} 
          className="listItem" 
          onClick={() => setShowMenu(false)}
        >
          Publications
        </Link>
        <a 
          href="mailto:mosadoluwamorphing@gmail.com" 
          className="listItem mobileMenuBtn" 
          onClick={() => setShowMenu(false)}
        >
          Send a Mail
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
