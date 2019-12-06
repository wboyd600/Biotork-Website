import React from 'react';
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
                <img class="card-img-top" src="https://i.ibb.co/7V5sftD/Mark-Bio-Tork.png" alt="Mark"></img>
                <div class="container">
                    <h2>Mr. Mark DeAndrea</h2>
                    <p class="title">President & Chief Strategy Officer</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>CEO@test.com</p>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img class="card-img-top" src="https://i.ibb.co/VjW939R/Hans-Headshot.jpg" alt="Hans"></img>
                <div class="container">
                    <h2>Mr. Hans van der Slujis</h2>
                    <p class="title">Chief Business Development Officer</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>science@test.com</p>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img class="card-img-top" src="https://i.ibb.co/k0G5mW5/TomLyons.jpg" alt="John"></img>
                <div class="container">
                    <h2>Dr. Tom Lyons</h2>
                    <p class="title">Chief Science Officer</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>engineer@test.com</p>
                </div>
                </div>
            </div>
            </div>
        </div>


        <div class="row">
            <div class="flex-container">
                <div class="column">
                    <div class="card">
                    <img class="card-img-top" src="https://i.ibb.co/1fC48Rg/Marc-Penicaud.jpg" alt="John"></img>
                <div class="container">
                    <h2>Mr. Marc Penicaud</h2>
                    <p class="title">CEO & co-founder</p>
                    <p>lorem ipsum ipsum lorem.</p>
                    <p>engineer@test.com</p>
                </div>
                </div>
                </div>

                <div class="column">
                    <div class="card">
                    <img class="card-img-top" src="https://www.clipartwiki.com/clipimg/detail/197-1979569_no-profile.png" alt="John"></img>
                <div class="container">
                    <h2>Mr. Eudes de Crecy</h2>
                    <p class="title">co-founder</p>
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
