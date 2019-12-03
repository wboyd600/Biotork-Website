import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
    <>
        <div class="container">
            <div class="row">
                <div class="about-hero-section"> 
                    <div class="hero-section-text"> 
                        <div class="heading-title text-center">
                            <h1> About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>           

        <div>
            <p></p>
            <p class = "heading-title h1 text-center"> A brief history of BioTork</p>
            <p class = "heading-detail"> Founded in 2008 and based in Gainesville, FL, BioTork has become a world leader in the evolutionary optimization of fermentation processes. Through access to a unique proprietary technology, we use natural selection to improve the microorganisms that carry out fermentation.</p>
            <p> </p>
        </div>
        

        <div>
            <p class = "heading-title h1 text-center"> Misson statements  </p>
            <p>• Here at BioTork, our mission is to improve world sustainability and the environmental conditions of our planet for generations to come.</p>
        </div>

        <div>
            <p>• Recycling waste, sustainable agriculture and renewable energy are threads that run through all of the projects we undertake. By improving biological processes, we convert low-value agricultural by-products to commodities such as renewable energy and high value supplements.</p>
        </div>

        <div>
            <p>• Most importantly, we carry out our improvement of these biological process through evolution rather than genetic engineering. This allows us to create optimum NON-GMO cellular factories for the conversion of feedstock into desirable commodities. However, it also allows us to improve already genetically modified organisms for traits such as robustness if desired.</p>
        </div>

        <div>
            <p>• As a company, we are dedicated to preserving the gifts and harnessing the power of nature.</p>
        </div>

        <h2 class = "heading-title h3">
            <Link className="Exec-link" to= 'Executives'> Read about our executives here </Link>
        </h2>
    </>
    );
}

export default AboutUs;
