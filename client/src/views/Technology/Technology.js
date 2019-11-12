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
                <div class="hero-section" style={{  background: "url(" + "https://airbus-h.assetsadobe2.com/is/image/content/dam/corporate-topics/innovation/Innovation-future-technology.jpg?wid=1920&fit=fit,1&qlt=85,0" + ")"}}>
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
                    <Link className="FAQ-Link" to='/FAQ'>Frequently Asked Questions</Link>    
                </h2>

                <h1 class="heading-title text-center">
                    Lorem ipsum dolor 
                    sit amet, consectetur adipiscing elit
                </h1>

                <div class="heading-detail text-center">
                    <p class="center-txt ">BioTork is the world leader in the use of evolutionary optimization to develop robust cellular factories capable of converting low value carbon sources such as biomass and agro-industrial by-products into high-value bio-based chemical commodities. Instead of adapting the production process to the metabolic limitations of the microorganisms, we adapt the microorganisms to perform optimally in the simplest and most economical production process.</p>
                </div>

                <div class = "heading-detail text-center">
                    <p class = "center-txt"> Click on a topic to learn more. </p>
                </div>
            </div>
        </div>

        <div class="row">
             <div class="flex-container">

                <div class="column">
                    <div class="card">
                        <div class="hero-section" style={{  background: "url(" + "https://www.darpa.mil/DDM_Gallery/BTOOfficewide619-316.jpg" + ")"}}>
                            <div class="container" >
                                <h2>GREATER PRODUCT YIELDS</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <div class="hero-section" style={{  background: "url(" + "https://news.crunchbase.com/wp-content/uploads/2018/05/molecular-explosion-abstract-science-background-illustration-id496698386-1.jpg" + ")"}}>
                            <div class="container" >
                                <h2>HIGHER GROWTH RATES</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <div class="hero-section" style={{  background: "url(" + "https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3Adfddd2a117538bc697836b2359cdd805860b7cdd5a9f194afdad6ec8%2BIMAGE_TINY%2BIMAGE_TINY.1" + ")"}}>
                            <div class="container" >
                                <h2>HIGHER PRODUCTIVITY</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <div class="hero-section" style={{  background: "url(" + "http://www.indiaeducation.net/imagesvr_ce/5731/bg-aperfeicoamento.jpg" + ")"}}>
                            <div class="container" >
                                <h2>HIGHER TITERS</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <div class="hero-section" style={{  background: "url(" + "https://uwaterloo.ca/future-students/sites/ca.future-students/files/uploads/images/contract-628-171208-science-stock-6610.jpg" + ")"}}>
                            <div class="container" >
                                <h2>HIGHER CULTURE DENSITIES</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <div class="hero-section" style={{  background: "url(" + "https://crosstalk.cell.com/hs-fs/hubfs/Images/Matt%20Pavlovich/Talking%20about%20biotechnology/sequencing%20featured.jpg?width=769&name=sequencing%20featured.jpg" + ")"}}>
                            <div class="container" >
                                <h2>HIGHER TOLERANCE TO PRODUCT INHIBITION OR TO TOXIC COMPOUNDS</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <div class="hero-section" style={{  background: "url(" + "https://www.wur.nl/upload_mm/2/a/3/47584885-db94-4d8f-af9c-3e401b41260e_2173890_blauwe%20cellen_B_2add4f09_530x397.jpg" + ")"}}>
                            <div class="container" >
                                <h2>ROBUST GROWTH AT NON-OPTIMAL TEMPERATURES, pH OR AERATION RATES</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <div class="hero-section" style={{  background: "url(" + "https://media.licdn.com/dms/image/C561BAQG1SIL0uFUQ1A/company-background_10000/0?e=2159024400&v=beta&t=vD9AZT70vkE9pMDv7NQJ7LVl3o2qaly8CbGRS726_T4" + ")"}}>
                            <div class="container" >
                                <h2>UTILIZATION OF NON-OPTIMAL CARBON</h2>
                            </div>
                        </div>
                    </div>
                </div>                      
            </div>
        </div>        
    </>
    );
}

export default Technology;