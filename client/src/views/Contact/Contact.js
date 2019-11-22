import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

class Contact extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            firstName:      "",
            lastName:       "",
            email:          "",
            subject:        "",
            message:        ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({[event.target.name] : event.target.value});
        console.log(event.target.name + ": " + event.target.value);
    }

    handleSubmit(event) {
        alert("Contact Form Submitted " + "\n" + 
        "Name:  " + this.state.firstName + " " + this.state.lastName  + "\n" + 
        "Email: " + this.state.email     + "\n\n" +
        "Subject:   " + this.state.subject   + "\n" +
        this.state.message);
        event.preventDefault();
      }

    render() {
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
                        <p class="center-txt">
                            Whether you are interested interest in text, or just want to reach out to us and let us know about text. Awesome cool thanks for emailing us.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row ">
                <div class="col-md-12">
                    <div class="well well-sm">

                        <form onSubmit = {this.handleSubmit}>
                            <div class="row">
                                <div class="col-md-12">

                                    <div class="form-group">
                                        <label for="firstName">
                                            First Name
                                        </label>

                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            name="firstName" 
                                            placeholder="Enter first name" 
                                            required="required"
                                            firstname = {this.state.firstname}
                                            onChange = {this.handleInputChange}
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="lastName">
                                            Last Name
                                        </label>

                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            name="lastName" 
                                            placeholder="Enter last name" 
                                            required="required" 
                                            lastName = {this.state.lastName}
                                            onChange = {this.handleInputChange}
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="email">
                                            Email Address
                                        </label>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <span class="glyphicon glyphicon-envelope"> </span>
                                            </span>

                                            <input 
                                                type="email" 
                                                class="form-control" 
                                                name="email" 
                                                placeholder="Enter email" 
                                                required="required"
                                                email = {this.state.email}
                                                onChange = {this.handleInputChange} 
                                            />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="subject">
                                            Subject
                                        </label>
                                        
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            name="subject" 
                                            placeholder="Enter subject" 
                                            required="required" 
                                            subject = {this.state.subject}
                                            onChange = {this.handleInputChange}
                                        />
                                    </div> 
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="message">
                                            Message
                                        </label>
                                
                                        <textarea name="message" 
                                            name="message" 
                                            class="form-control" 
                                            rows="9" cols="25" 
                                            required="required"
                                            message = {this.state.message}
                                            onChange = {this.handleInputChange}
                                            placeholder="Message">    
                                        </textarea>
                                    </div>
                                </div>
                        
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary" id="btnContactUs">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
        </>
    )}
}
export default Contact;