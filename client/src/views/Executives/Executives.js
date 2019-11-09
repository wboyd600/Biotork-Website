import React from 'react';
import logo from '../../assets/logo.svg';
import './Executives.css';

function Home() {
    return (
    <>

        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </head>

        <div class="container">
            <div class="row">
            <div class="hero-section">
            <div class="hero-section-text">
            <div class="heading-title text-center">
                    <h1> Our professionals </h1>
                </div>
            </div>
            </div>
            </div>
        </div>


        <div class="container">
            <div class="row">
                <div class="heading-title text-center">
                    <p class="center-txt">Lorem ipsum dolor 
                    sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="flex-container">
            <div class="column">
                <div class="card">
                <img class="card-img-top" src="https://image.freepik.com/free-photo/portrait-middle-aged-businessman-posing-looking-camera_1163-4800.jpg" alt="Jane"></img>
                <div class="container">
                    <h2>James Bond</h2>
                    <p class="title">CEO &amp; Founder</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>CEO@test.com</p>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img class="card-img-top" src="https://image.freepik.com/free-photo/confident-entrepreneur-satisfied-with-own-success_1163-5474.jpg" alt="Mike"></img>
                <div class="container">
                    <h2>Mark Dobbins</h2>
                    <p class="title">Lead Scientist</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>science@test.com</p>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img class="card-img-top" src="https://image.freepik.com/free-photo/happy-african-american-professional-manager-smiling-looking-camera-headshot-portrait_1163-5134.jpg" alt="John"></img>
                <div class="container">
                    <h2>John Doe</h2>
                    <p class="title">Senior Engineer</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>engineer@test.com</p>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div class="cotainer">
            <div class="row">
                <div class="flex-container">
                <div class="column">
                    <div class="card">
                        <div class="card-fa">
                            <i class="fa fa-handshake-o" style={{color : 'green', fontSize : '32px'}}></i>
                            <div class="row">
                                <p class="center-txt-alt">Partners you can trust</p>
                            </div>
                            <div class="row">
                                <p class="center-txt-alt">Lorem ipsum dolor 
                                sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                            <div class="card-fa">
                                <i class="fa fa-user-circle-o" style={{color : 'green', fontSize : '32px'}}></i>
                                <div class="row">
                                    <p class="center-txt-alt">Putting clients first</p>
                                </div>
                                <div class="row">
                                    <p class="center-txt-alt">Lorem ipsum dolor 
                                    sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="column">
                <div class="card">
                        <div class="card-fa">
                            <i class="fa fa-history" style={{color : 'green', fontSize : '32px'}}></i>
                            <div class="row">
                                <p class="center-txt-alt">A history of success</p>
                            </div>
                            <div class="row">
                                <p class="center-txt-alt">Lorem ipsum dolor 
                                sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
         
        
        </>

    );
}




export default Home;
