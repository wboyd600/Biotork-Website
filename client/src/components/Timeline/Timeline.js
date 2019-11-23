import React from 'react';
import  './Timeline.css';
import grass from '../../assets/grass.jpg';
import grass1 from '../../assets/grass1.jpg';
import grass6 from '../../assets/grass6.jpg';
import grass7 from '../../assets/grass7.jpg';
import grass5 from '../../assets/grass5.jpg';


class Timeline extends React.Component{

    render(){
        return(          
<div class="back">

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div class="timeline">
    <div class="container4 left">
        <div class="content4">
            <div class="container3">  
            <img src={grass1} alt="Avatar" class="image"/>
            <div class="centered">2019</div>
            <div class="overlay">
                <div class="text5"><h2>2019</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum</p></div>
                </div>
            </div>
        </div>
    </div>
    <div class="container4 right">
      <div class="content4">
          
            <div class="container3">  
              <img src={grass7} alt="Avatar" class="image"/>
              <div class="centered">2018</div>
            </div>
              <div class="overlay">
                <div class="text5"><h2>2018</h2>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum</p></div>
             
            </div>
  
  
  
        
      </div>
  </div>

    <div class="container4 left">
      <div class="content4">
          
            <div class="container3">  
              <img src={grass5} alt="Avatar" class="image"/>
              <div class="centered">2017</div>
            </div>
              <div class="overlay">
                <div class="text5"><h2>2017</h2>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum </p></div>
             
            </div>
  
  
  
        
      </div>
  </div>
  <div class="container4 right">
      <div class="content4">
         
            <div class="container3">  
              <img src={grass6} alt="Avatar" class="image"/>
              <div class="centered">2016</div>
            </div>
              <div class="overlay">
                <div class="text5"><h2>2016</h2>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum</p></div>
             
            </div>
  
  
  
        
      </div>
  </div>


  <div class="container4 left">
      <div class="content4">
          
            <div class="container3">  
              <img src={grass7} alt="Avatar" class="image"/>
              <div class="centered">2015</div>
            </div>
              <div class="overlay">
                <div class="text5"><h2>2015</h2>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum</p></div>
             
            </div>
  
  
  
        
      </div>
  </div>
  <div class="container4 right">
      <div class="content4">
         
            <div class="container3">  
              <img src={grass1} alt="Avatar" class="image"/>
              <div class="centered">2014</div>
            </div>
              <div class="overlay">
                <div class="text5"><h2>2014</h2>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum</p></div>
              
            </div>
  
  
  
        
      </div>
  </div>
</div>

</div>
             
        );
    }
}

export default Timeline;