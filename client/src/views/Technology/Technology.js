import React from 'react';
import './Technology.css';
function Technology() {
    return (
        <>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </head>
        <div class="container">
            <div class="row">
            <div class="hero-section">
            <div class="hero-section-text">
            <div class="heading-title text-center">
                    <h1> Our Technologies </h1>
                </div>
            </div>
            </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <h2 class="heading-title text-center">
                    Leaders in Stuff
                </h2>
                <h1 class="heading-title text-center">
                Lorem ipsum dolor 
                    sit amet, consectetur adipiscing elit
                </h1>
                <div class="heading-detail text-center">
                    <p class="center-txt ">BioTork is the world leader in the use of evolutionary optimization to develop robust cellular factories capable of converting low value carbon sources such as biomass and agro-industrial by-products into high-value bio-based chemical commodities. Instead of adapting the production process to the metabolic limitations of the microorganisms, we adapt the microorganisms to perform optimally in the simplest and most economical production process.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="flex-container">
            <div class="column">
                <div class="card">
                <img class="card-img-top" src="https://image.freepik.com/free-photo/portrait-middle-aged-businessman-posing-looking-camera_1163-4800.jpg" alt="Jane"></img>
                <div class="container">
                    <h2>James Bond</h2>
                    <p class="title">CEO &amp; Founder</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>CEO@test.com</p>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img class="card-img-top" src="https://image.freepik.com/free-photo/confident-entrepreneur-satisfied-with-own-success_1163-5474.jpg" alt="Mike"></img>
                <div class="container">
                    <h2>Mark Dobbins</h2>
                    <p class="title">Lead Scientist</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>science@test.com</p>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img class="card-img-top" src="https://image.freepik.com/free-photo/happy-african-american-professional-manager-smiling-looking-camera-headshot-portrait_1163-5134.jpg" alt="John"></img>
                <div class="container">
                    <h2>John Doe</h2>
                    <p class="title">Senior Engineer</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>engineer@test.com</p>
                </div>
                </div>
            </div>
            </div>
        </div>   
    </>
    );
}

export default Technology;
