import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/BioTork_High_Definition_Logo.png';
import {Nav, Navbar } from 'react-bootstrap';



const Header = () => (

        <Navbar bg="light" variant="light" fixed="top" expand="sm">
       
            <Navbar.Brand id="logo-link" href="/">
                <img className="topnav-logo" src={ logo } alt="BioTork logo" />
            </Navbar.Brand> 
            
            {/* Page Links */}
        {/*  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button> */}

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav classname="ml-auto">
                <Nav.Link href='/about'>About Us</Nav.Link>
                <Nav.Link href='/technology'>Technology</Nav.Link>
                <Nav.Link href='/projects'>Projects</Nav.Link>
                <Nav.Link href='/media'>Media</Nav.Link>
                <Nav.Link href='/contact'>Contact Us</Nav.Link> 
        
                </Nav>
                </Navbar.Collapse>
        </Navbar>

        
    )

    


export default Header;