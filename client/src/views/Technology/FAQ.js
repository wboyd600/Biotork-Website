import React from 'react';
import './Technology.css';

function FAQ() {
    return (
        <>
        <div class="container">
            <div class="row">
                <div class="faq-hero-section" style={{background: './FAQ.jpg'}}>
                    <div class="hero-section-text"> 
                        <div class="heading-title text-center">
                            <h1> Frequently Asked Questions </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="heading-detail">
                    <p class = "center-txt"> </p>
                    <p class = "heading-title h3">Q: What is a cellular factory and what is its importance?</p>
                    <p class = "heading-detail">A: Most people know that products like beer and wine are produced by microorganisms through the process of fermentation, and most probably know that many bulk commodity chemicals, like fuel ethanol, are also produced through fermentation. However, it might surprise one to discover just how many products we consume daily are also produced through fermentation — such as coffee, chocolate, insulin, yogurt, deli meats, vitamins, enzymes, cosmetics, nutraceuticals, bioplastics, pharmaceuticals and much more. It can be fairly said that the “fermentation industry” is easily the largest economic sector in the world in terms of both volume and revenues. BioTork is on the cutting edge of innovation in the fermentation industry. </p>
                    <p class = "heading-detail">At the heart of this industry is what we call the cellular factory, or the microorganism that is used to make the product. These microorganisms are given food and other nutrients and cultivated in bioreactors wherein they convert the food into the desired product. Like any other component of a production process, the cellular factory needs to be continually upgraded to maximize productivity and reduce the cost of goods to gain or maintain a competitive advantage. </p>

                    <p class = "center-txt"> </p>
                    <p class = "heading-title h3">Q: How are cellular factories chosen and/or developed?</p>
                    <p class = "heading-detail">A: Historically, cellular factories were “bioprospected”. This means that microorganisms were chosen from the wild for their ability to make the desired product. However, since wild microorganisms have spent billions of years evolving for ever-changing environmental conditions, they rarely perform well enough in terms of product titer and productivity to support a commercially viable process. This means that, more often than not, wild microorganisms need to be further developed. </p>
                    <p class = "heading-detail">The oldest means of optimizing the performance of microbes is simple selection, where a microbe is plugged ainto a commercial process and, over many years, one selects for strains that perform better and better. This is how the alcoholic beverage industry ended up selecting for strains of the yeast Saccharomyces cerevisiae that can tolerate ethanol concentrations of up to 20% over the course of a few thousand years. Of course, most companies don’t have thousands of years to obtain optimized strains. The process of strain improvement needs to be accelerated. </p>
                    <p class = "heading-detail">This led to the development of evolutionary optimization. In this method, microorganisms are maintained under laboratory conditions in a state of continuous culture. The strain developer then applies selective pressure for the acquisition of new properties that improve its performance in the industrial setting. Of course, since evolution requires genetic diversity, methods can be employed that introduce new mutations into the evolving population, thereby accelerating the pace of evolution.
                                                With the advent of genetic engineering, the ability to deliberately modify the genomes of cellular factories held the promise of accelerating the pace of strain development even further. Without a doubt, genetic engineering has achieved many amazing things, however, there are two fundamental problems with the technology. First, many industries do not tolerate genetically modified cellular factories (GMOs) for reasons of consumer preference. Second, while genetic engineering can be used to coerce a microbe into making a particular product, it cannot be used to select for the best strain with that capability. Only evolutionary optimization can do that. When genetic engineering is coupled with evolutionary optimization, truly robust cellular factories can be made. </p>
                    
                    <p class = "center-txt"> </p>
                    <p class = "heading-title h3">Q: How is evolutionary optimization different from genetic engineering?</p>
                    <p class = "heading-detail">A: In genetic engineering, targeted disruptions are made in the genome of the cellular factory. This can be in the form of foreign DNA that is introduced or endogenous DNA that is altered or removed. They key point being that mutations are deliberate. In evolutionary optimization, the mutations that are introduced into the genome occur via spontaneous mutation and natural selection is applied to select for the most optimized strain. Think of it as a way of “breeding” microorganisms.
                                                It may seem as though the distinction is rather a matter of semantics. However, the distinction between the two technologies has critical ramifications for product deployment and marketing. The reason is that it can often be difficult or impossible to deploy products made from genetically engineered microbes (GMOs) in certain markets due to consumer backlash. Microbes that are developed solely using evolutionary optimization are not legally considered GMOs and are therefore exempt from regulations that govern the deployment of GMOs. </p>
                    
                    <p class = "center-txt"> </p>
                    <p class = "heading-title h3">Q: How has BioTork’s technology revolutionized evolutionary optimization?</p>
                    <p class = "heading-detail"> A: In order to get evolutionary optimization to work, one must have a method for continuously culturing microorganisms. In order to apply maximal selective pressure, one must be able to monitor growth in real time, one must be able to culture a large enough population with sufficient genetic diversity and one must be able to consistently sample a representative subset of the entire evolving population. More importantly, it is critical that the cellular factory be evolved under the exact conditions it will be expected to perform under.
                                                 The average strain developer has two methods of continuous culture available to them, both of which have serious limitations that hinder or prevent successful evolution of optimized strains. The first, and oldest method, is called serial batch culture. For practical reasons, it is difficult to monitor growth rate in real time using this method without reducing selective pressure. The second method, which is exemplified by devices known as chemostats, is limited by a phenomenon known as wall growth where microbes stick to the surfaces of the bioreactor to evade evolutionary pressure. Most importantly, neither method (serial batch culture or chemostats) can be used effectively to evolve microbes that are adherent or filamentous or on real world industrial substrates. This has largely limited to use of evolution for strain development and led to the perception that evolutionary optimization is slow and plodding.
                                                 BioTork uses a new and proprietary method of continuous culture that circumvents all the problems associated with serial batch culture and chemostats allowing for rapid and robust evolution of any type of microorganism on any type of substrate.</p> 
                </div>
            </div>
         </div>          
</>
    );
}

export default FAQ;