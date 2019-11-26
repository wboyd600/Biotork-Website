import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <>
        <div class="container">
            <div class="row">
                <div class="project-hero-section">
                    <div class="hero-section-text"> 
                        <div class="heading-title text-center">
                            <h1> Projects </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="heading-detail text-center">
                    <p class="center-txt ">Our work focuses on improving microorganisms for existing fermentation processes, as well as creating novel pathways to use new substrates such as waste to make high value commodities.
                    <br /> We are particularly devoted to projects that target sustainability.</p>
                </div>

            </div>
         </div>

            <div class="row">
            <div class="flex-container">
            <div class="column">
            <a href='/projects/fuel-ethanol'>
                <div class="card">
                <img class="card-img-top" src={require('./iowa.jpg')} alt="Nature Photo"></img>
                <div class="container">
                    <p class="title">Fuel Ethanol</p>
                </div>
                </div>
                </a>
                </div>

                <div class="column">
                <a href='/projects/omega-oils'>
                <div class="card">
                <img class="card-img-top" src={require('./underwater.jpg')} alt="Fish"></img>
                <div class="container">
                    <p class="title">Omega3 Oils</p>
                </div>
                </div>
                </a>
                </div>

                <div class="column">
                <a href='/projects/Phytase'>
                <div class="card">
                <img class="card-img-top" src={require('./Phytase-Photo.jpg')} alt="Cows"></img>
                <div class="container">

                    <p class="title">Phytase</p>
                </div>
                </div>
                </a>
                </div>

                <div class="column">
                <a href='/projects/consumer-alcohol'>
                <div class="card">
                <img class="card-img-top" src={require('./distillery-barrels.jpg')} alt="Distillery Barrels"></img>
                <div class="container">

                    <p class="title">Consumer Alcohol</p>
                </div>
                </div>
                </a>
                </div>
                </div>
            </div>
            
  
</>
    );
}

export default Projects;

