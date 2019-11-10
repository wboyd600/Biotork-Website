import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <div class="footer">
            <div class="footer-content">
                <div class="footer-section about">
                    <h1><span>BioTork</span></h1>
                    <p>
                        Here at BioTork, our mission is to improve world 
                        sustainability and the environmental conditions 
                        of our planet for generations to come.
                    </p>
                    <div class="contact">
                        <span><i class="fa fa-phone"></i> &nbsp;123-456-789</span><br></br>
                        <span><i class="fa fa-envelope"></i> &nbsp;test@BioTork.com</span>
                    </div>
                    <div class="socials">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-section links"></div>
                <div class="footer-section contact-form"></div>
            </div>
            <div class="footer-bottom">
                &copy; BioTork 2019 | Designed By Group 5B
            </div>

        </div>
        </>
    );
}

export default Footer;