import React from 'react';
import './navbar.css';
import logo from '../../../public/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='Home' spy={true} smooth = {true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='Portfolio' spy={true} smooth = {true} offset={-100} duration={500}className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='Publications' spy={true} smooth = {true} offset={-100} duration={500}className="desktopMenuListItem">Publications</Link>
      </div>
      <a href="mailto:mosadoluwamorphing@gmail.com" className='desktopMenuBtn'>
        Send a Mail
      </a>       
    </nav>
  );
};

export default Navbar;
