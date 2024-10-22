import React from 'react';
import './navbar.css';
import logo from '../../../public/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className='desktopMenu'>
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Publications</Link>
      </div>
      <a href="mailto:mosadoluwamorphing@gmail.com" className='desktopMenuBtn'>
        Send a Mail
      </a>       
    </nav>
  );
};

export default Navbar;
