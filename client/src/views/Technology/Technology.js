import React from 'react';
import './Technology.css';
import { Link } from 'react-router-dom';
function Technology() {
    return (
        <>
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </head>
        <div class="container">
            <div class="row">
                <div class="hero-section" style={{  background: 'Technology.jpg'}}>
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
                
                <h1 class="heading-title text-center">
                    BioTork can improve any type of microorganism on any kind of substrate.
                </h1>

                <div class="heading-detail">
                    <p class="center-txt ">BioTork is the world leader in the use of evolutionary optimization to develop robust cellular factories capable of converting low value carbon sources such as biomass and agro-industrial by-products into high-value bio-based chemical commodities. Instead of adapting the production process to the metabolic limitations of the microorganisms, we adapt the microorganisms to perform optimally in the simplest and most economical production process.</p>
                </div>
                <p> </p>
            </div>
        </div>

        <div class="row">
             <div class="flex-container">

                <div class="column">
                    <a href='/Technology/ProductYield'>
                        <div class="card">
                            <img class="card-img-top" 
                                src={require('./ProductYield.jpg')}> 
                            </img>
                            <div class="container" >
                                <p class = "title"> Greater Product Yields</p>    
                            </div>
                        </div>
                    </a>
                </div>
               
                <div class="column">
                    <a href='/Technology/GrowthRate'>
                        <div class="card">
                            <img class="card-img-top" 
                                src={require('./GrowthRate.jpg')}> 
                            </img>
                            <div class="container" >
                                <p class = "title"> Higher Growth Rates</p>    
                            </div>
                        </div>
                    </a>
                </div>

                <div class="column">
                    <a href='/Technology/Productivity'>
                        <div class="card">
                            <img class="card-img-top" 
                                src={require('./Productivity.jpg')}> 
                            </img>
                            <div class="container" >
                                <p class = "title"> Higher productivity</p>    
                            </div>
                        </div>
                    </a>
                </div>

                <div class="column">
                    <a href='/Technology/Titers'>
                        <div class="card">
                            <img class="card-img-top" 
                                src={require('./Titers.jpg')}> 
                            </img>
                            <div class="container" >
                                <p class = "title"> Higher Titers </p>    
                            </div>
                        </div>
                    </a>
                </div>

                <div class="column">
                    <a href='/Technology/Culture'>
                        <div class="card">
                            <img class="card-img-top" 
                                src={require('./Culture.jpg')}> 
                            </img>
                            <div class="container" >
                                <p class = "title"> Culture Densities</p>    
                            </div>
                        </div>
                    </a>
                </div>

                <div class="column">
                    <a href='/Technology/Tolerance'>
                        <div class="card">
                            <img class="card-img-top" 
                                src={require('./Tolerance.jpg')}> 
                            </img>
                            <div class="container" >
                                <p class = "title"> Higher Tolerance</p>    
                            </div>
                        </div>
                    </a>
                </div>

                <div class="column">
                    <a href='/Technology/Robust'>
                        <div class="card">
                            <img class="card-img-top" 
                                src={require('./Robust.jpg')}> 
                            </img>
                            <div class="container" >
                                <p class = "title"> Robust Growth</p>    
                            </div>
                        </div>
                    </a>
                </div>

                <div class="column">
                    <a href='/Technology/Carbon'>
                        <div class="card">
                            <img class="card-img-top" 
                                src={require('./Carbon.jpeg')}> 
                            </img>
                            <div class="container" >
                                <p class = "title"> Non-Optimal Carbon </p>    
                            </div>
                        </div>
                    </a>
                </div>           
            </div>
        </div>  

        <h2 class="heading-title text-center">
        <Link className="FAQ-Link" to='Technology/FAQ'>Frequently Asked Questions</Link>    
        </h2>
        <p> </p>

        <h2 class="heading-title text-center">
            <Link className="Selection-Link" to='Technology/Selection'>Selection Scenarios</Link>    
        </h2>
        <p> </p>      
    </>
    );
}

export default Technology;

