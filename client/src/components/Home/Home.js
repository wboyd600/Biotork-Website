import React, {Fragment} from 'react';
import './Home.css';
import PR from '../PR/PR.js';

/* Hero Image and covering text - Using google fonts for the custome text */

/* Company announcements are hard coded in similar format for usage with admin panel */
/* To add company announcements use pre populated elements as template. Replace links and relevant information */
/* The CSS will handle the styling */

class Home extends React.Component {
    
    render(){
        return(
            <Fragment>
                {/* TITLE */}
                <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"></link>
                <div className="bg">
                    <p className="text">Welcome to BioTork <br />
                        <div className="text2">Evolving beyond the imagination</div></p>
                </div>
                {/* Press Release Section */}
                <PR/>
            </Fragment>
        );
    }
}

export default Home;