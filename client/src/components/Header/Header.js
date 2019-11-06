import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/biotork-logo.png';
import {Nav, Navbar } from 'react-bootstrap';



const Header = () => (
        <Navbar expand="lg">
        <div className='topnav'> 
            <Navbar.Brand id="logo-link" href="/">
                <img className="topnav-logo" src={ logo } alt="BioTork logo" />
            </Navbar.Brand> 
            <Nav className = 'mr-auto'>
            {/* Page Links */}
            <div className="topnav-right">
                <Nav.Link href='/about'>About Us</Nav.Link>
                <Nav.Link href='/technology'>Technology</Nav.Link>
                <Nav.Link href='/projects'>Projects</Nav.Link>
                <Nav.Link href='/media'>Media</Nav.Link>
                <Nav.Link href='/contact'>Contact Us</Nav.Link>

            </div>
            </Nav>
        </div>
        </Navbar>
        
    )

    


export default Header;