import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

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

                <div class = "heading-detail text-center">
                    <p class = "center-txt"> Click on a project to learn more. </p>
                </div>
            </div>
         </div>

            <div class="row">
            <div class="flex-container">
            <div class="column">
                <div class="card">
                <img class="card-img-top" src={require('./iowa.jpg')} alt="Jane"></img>
                <div class="container">
                    <p class="title">Fuel Ethanol</p>
                </div>
                </div>
                </div>

                <div class="column">
                <div class="card">
                <img class="card-img-top" src={require('./underwater.jpg')} alt="Jane"></img>
                <div class="container">
                    <p class="title">Omega3 Oils</p>
                </div>
                </div>
                </div>

                <div class="column">
                <div class="card">
                <img class="card-img-top" src={require('./Phytase-Photo.jpg')} alt="Jane"></img>
                <div class="container">

                    <p class="title">Phytase</p>
                </div>
                </div>
                </div>

                <div class="column">
                <div class="card">
                <img class="card-img-top" src={require('./distillery-barrels.jpg')} alt="Jane"></img>
                <div class="container">

                    <p class="title">Consumer Alcohol</p>
                </div>
                </div>
                </div>
                </div>
            </div>
            
  
</>
    );
}

export default Projects;

