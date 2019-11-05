import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='topnav'>
            {/* Logo */}

            {/* Page Links */}
            <div className="topnav-right">
                <Link className="topnav-link" to='/Home'> Home </Link> 
                <Link className="topnav-link" to='/Executives'> Executives </Link>
            </div>
        </div>
    )
}

export default Header;
