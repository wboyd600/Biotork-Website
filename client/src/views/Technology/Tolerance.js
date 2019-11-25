import React from 'react';
import './Technology.css';

function Tolerance() {
    return (
        <>
        <div class="container">
            <div class="row">
                <div class="tolerance-hero-section" style={{  background: './Tolerance.jpg'}}>
                    <div class="hero-section-text"> 
                        <div class="heading-title text-center">
                            <h1> Higher tolerance to product inhibition or to toxic compounds </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="heading-detail text-center">
                    <p class="center-txt ">Nearly everything can be toxic when it accumulates to high-enough levels. This is one reason why cellular factories often stop producing the desired end product when it accumulates above a certain threshold. The product ends up stopping its own production, either by inhibiting the enzymes that make it or by killing the cellular factory outright. Another factor is that the diversion of nutrients away from essential cellular functions towards the generation of the desired product can wreak havoc on a cells ability to perform. In addition, many cells also drastically change their environment as they grow by producing metabolites such as acids, bases or alcohols and some even produce antibiotics or other secondary metabolites with growth inhibitory properties. These “off-target” metabolites can also inhibit performance. Finally, inhibitory compounds can also be introduced into industrial fermentation via the feedstock used to grow the cellular factory. The use of highly purified substrates, like refined sugar or glycerol, is often too expensive, causing producers to switch to less pure “real-world” feedstocks. In many cases, the impurities in these cheaper feedstocks reduce the performance of the microbes. BioTork’s evolutionary optimization technology has been effectively used to adapt a variety of cellular factories to an array of toxic compounds. The resulting microbes can perform equally well in the presence or absence of toxins allowing producers to make more of a toxic end product, to make more of a desired end product in the presence of inhibitory compounds and to reduce the cost of goods by switching to cheaper impure feedstocks.</p>
                    <p class="center-txt " > </p>
                </div>
            </div>
         </div>          
</>
    );
}

export default Tolerance;