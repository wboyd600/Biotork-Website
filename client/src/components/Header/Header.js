import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/BioTork_High_Definition_Logo.png';
import {Nav, Navbar } from 'react-bootstrap';




const Header = () => (

        <Navbar bg="light" variant="light" fixed="top">
       
            <Navbar.Brand id="logo-link" href="/">
                <img className="topnav-logo" src={ logo } alt="BioTork logo" />
            </Navbar.Brand> 
            <Nav>

            {/* Page Links */}
               
                <Nav.Link href='/about'>About Us</Nav.Link>
                <Nav.Link href='/technology'>Technology</Nav.Link>
                <Nav.Link href='/executives'>Executives</Nav.Link>
                <Nav.Link href='/projects'>Projects</Nav.Link>
                <Nav.Link href='/media'>Media</Nav.Link>
                <Nav.Link href='/contact'>Contact Us</Nav.Link> 
                </Nav>
        </Navbar>

        
    )

    


export default Header;