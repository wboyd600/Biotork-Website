import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/biotork-logo.png';

const Header = () => {
    return (
        <div className='topnav'>
            {/* Logo */}
            <Link id="logo-link" to="/">
                <img className="topnav-logo" src={ logo } alt="Biotork logo" />
            </Link>

            {/* Page Links */}
            <div className="topnav-right">
                <Link className="topnav-link" to='/about'>About Us</Link>
                <Link className="topnav-link" to='/technology'>Technology</Link>
                <Link className="topnav-link" to='/projects'>Projects</Link>
                <Link className="topnav-link" to='/media'>Media</Link>
                <Link className="topnav-link" to="/contact">Contact Us</Link>
            </div>
        </div>
    )
}

export default Header;
