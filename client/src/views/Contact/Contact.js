import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
    return(
         <>
         <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </head>
            <div class="container">
            <div class="row">
            <div class="hero-section">
            <div class="hero-section-text">
            <div class="heading-title text-center">
                    <h1> How can we help? </h1>
                </div>
            </div>
            </div>
            </div>

            <div class="container">
            <div class="row">

                <h1 class="heading-title text-center">
                    Lorem ipsum dolor 
                    sit amet, consectetur adipiscing elit
                </h1>

                <div class="heading-detail text-center">
                    <p class="center-txt ">Whether you are interested interest in text, or just want to reach out to us and let us know about text. Awesome cool thanks for emailing us.</p>
                </div>
            </div>
        </div>

        <div class="row ">
        <div class="col-md-12">
            <div class="well well-sm">
                <form>
                <div class="row">

                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="name">
                                Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" />
                        </div>
                        <div class="form-group">
                            <label for="email">
                                Email Address</label>
                            <div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                </span>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" required="required" /></div>
                        </div>
                        <div class="form-group">
                            <label for="subject">
                                Subject</label>
                            <select id="subject" name="subject" class="form-control" required="required">
                                <option value="na" selected="">Choose One:</option>
                                <option value="stuff1">Stuff1</option>
                                <option value="stuff2">Stuff2</option>
                                <option value="stuff3">Stuff3</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="name">
                                Message</label>
                            <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                        <button type="submit" class="btn btn-primary" id="btnContactUs">
                            Send Message</button>
                    </div>
                    </div>

                </div>
            
                </form>
            </div>
            
        </div>
    </div>
    </div>

</>
    );
}
export default Contact;