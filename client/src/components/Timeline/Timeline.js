import React from 'react';
import './Timeline.css';
import grass from '../../assets/grass.jpg';
import grass1 from '../../assets/grass1.jpg';
import grass6 from '../../assets/grass6.jpg';
import grass7 from '../../assets/grass7.jpg';
import grass5 from '../../assets/grass5.jpg';

class Timeline extends React.Component {

  render() {
    return (


      <div class="timeline">

        <div class="timelinecontainer left">
          <div class="timelinecontent">
            <div class="timelinecontainer3">
              <img src={grass1} alt="Avatar" class="image"
              />

              <div class="timelinecentered">2019</div>
              <div class="timelineoverlay">
                <div class="timelinetext"><h2>2019</h2>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum</p></div>
              </div>
            </div>
          </div>
        </div>
        <div class="timelinecontainer right">
          <div class="timelinecontent">

            <div class="timelinecontainer3">
              <img src={grass7} alt="Avatar" class="image" />
              <div class="timelinecentered">2017</div>
            </div>
            <div class="overlay">
              <div class="timelinetext"><h2>2017</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum</p></div>

            </div>




          </div>
        </div>

        <div class="timelinecontainer left">
          <div class="timelinecontent">

            <div class="timelinecontainer3">
              <img src={grass5} alt="Avatar" class="image" />
              <div class="timelinecentered">2018</div>
            </div>
            <div class="overlay">
              <div class="timelinetext"><h2>2018</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum</p></div>

            </div>




          </div>
        </div>
        <div class="timelinecontainer right">
          <div class="timelinecontent">

            <div class="timelinecontainer3">
              <img src={grass6} alt="Avatar" class="image" />
              <div class="timelinecentered">2016</div>
            </div>
            <div class="overlay">
              <div class="timelinetext"><h2>2016</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum</p></div>

            </div>




          </div>
        </div>


        <div class="timelinecontainer left">
          <div class="timelinecontent">

            <div class="timelinecontainer3">
              <img src={grass7} alt="Avatar" class="image" />
              <div class="timelinecentered">2015</div>
            </div>
            <div class="overlay">
              <div class="timelinetext"><h2>2015</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum</p></div>

            </div>




          </div>
        </div>
        <div class="timelinecontainer right">
          <div class="timelinecontent">

            <div class="timelinecontainer3">
              <img src={grass1} alt="Avatar" class="image" />
              <div class="timelinecentered">2014</div>
            </div>
            <div class="overlay">
              <div class="timelinetext"><h2>2014</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum</p></div>

            </div>




          </div>
        </div>

      </div>




    );
  }
}

export default Timeline;