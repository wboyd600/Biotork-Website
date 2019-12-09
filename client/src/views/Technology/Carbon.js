import React from 'react';
import './Technology.css';

function Carbon() {
    return (
        <>
        <div class="container">
            <div class="row">
                <div class="carbon-hero-section" style={{  background: './Carbon.jpeg'}}>
                    <div class="hero-section-text"> 
                        <div class="heading-title text-center">
                            <h1> Utilization of non-optimal carbon or nutrient sources </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="heading-detail text-center">
                    <p class="center-txt "> Many microbes that are being investigated for industrial purposes perform well in the lab under conditions of optimal nutrition, yet fail to work upon scale up to industrial conditions. Moreover, they often work well on defined media that contain some nutrient sources but not on others. For example, many microbes grow well with a rich nitrogen source like yeast extract, but not with something like urea or ammonium sulfate. This “pickiness” with respect to nutrient sources can drastically increase the cost of production by requiring expensive inputs. The use of evolutionary optimization has been routinely used by BioTork to adapt microbes to perform as well on suboptimal nutrient sources as they do on the optimal sources, thereby reducing the cost of goods. </p>
                    <p class="center-txt " > </p>
                </div>
            </div>
         </div>          
</>
    );
}

export default Carbon;