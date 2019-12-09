import React from 'react';
import './Technology.css';

function Titers() {
    return (
        <>
        <div class="container">
            <div class="row">
                <div class="titers-hero-section" style={{  background: './Titers.jpg'}}>
                    <div class="hero-section-text"> 
                        <div class="heading-title text-center">
                            <h1> Higher titers </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="heading-detail text-center">
                    <p class="center-txt ">Titer is a term for how much product a cellular factory makes per fermentation volume. Titer is affected by a number of factors, including product inhibition, biomass yield of the cellular factory, optimal growth conditions and nutrient bioavailability. For obvious reasons, increasing titer is one of the quickest ways to increase the efficiency of a process. The use of evolutionary optimization to improve titer is ideal, particularly when the synthesis of the desired end product is tied to growth rate in some manner.  Often, however, when the central factor limiting product titer is not the product itself, simply improving the robustness of the microorganism under industrial conditions can significantly improve titer. In the case where the product limits its own production through some type of inhibition or toxicity, evolutionary adaptation can be effectively used to alleviate this inhibition and increase titer. Even small increases in titer can have profound impacts on an industrial process, particularly in industries where large volumes of product are made annually.</p>
                    <p class="center-txt " > </p>
                </div>
            </div>
         </div>          
</>
    );
}

export default Titers;