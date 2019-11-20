import React from 'react';
import './AboutUs.css';
import Executives from "../Executives/Executives"

function AboutUs() {
    return (
        <div class="container">
        <div class="row">
            <div class="about-hero-section">
                <div class="hero-section-text"> 
                    <div class="heading-title text-center">
                        <h1> About Us</h1>
                    </div>
                </div>
            </div>

            <div>
                <p>Founded in 2008 and based in Gainesville, FL, BioTork has become a world leader in the evolutionary optimization of fermentation processes. Through access to a unique proprietary technology, we use natural selection to improve the microorganisms that carry out fermentation.</p>
            </div>
        </div>

        <div class="row">
            <div class="about-hero-section">
                <div class="hero-section-text"> 
                    <div class="heading-title text-center">
                        <h1> Our Mission</h1>
                    </div>
                </div>
            </div>

            <div>
                <p>Founded in 2008 and based in Gainesville, FL, BioTork has become a world leader in the evolutionary optimization of fermentation processes. Through access to a unique proprietary technology, we use natural selection to improve the microorganisms that carry out fermentation.</p>
            </div>
        </div>

        <Executives></Executives>
    </div>


        
    
    );
}

export default AboutUs;
