import React from 'react';
import request from 'superagent';
import './Footer.css';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: ' '};

        this.addEmail = this.addEmail.bind(this);
        this.emailUpdate = this.emailUpdate.bind(this);
    }

    emailUpdate(email) {
        this.setState({email: email.target.value});
    }

    addEmail(email) {
        const data = {
            email: this.state.email,
        };

        request
        .post('/post-email')
        .send(data)
        .end((err, res) => {
          if (err || !res.ok) {
            console.log('Oh no! err');
          } else {
            console.log('Success');
          }
        });
    }

    render () {
        return (
            <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    
            <div class="flex-container">
            <div class="footer">
                <div class="footer-content">
                    <div class="footer-section about">
                        <h1><span>BioTork</span></h1>
                        <p>
                            Here at BioTork, our mission is to improve world 
                            sustainability and the environmental conditions 
                            of our planet for generations to come.
                        </p>
                        <div class="contact">
                            <span><i class="fa fa-phone"></i> &nbsp;123-456-789</span>
                            <span><i class="fa fa-envelope"></i> &nbsp;test@BioTork.com</span>
                        </div>
                        <div class="socials">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>About Us</li></a>
                            <a href="#"><li>Technology</li></a>
                            <a href="#"><li>Company Timeline</li></a>
                            <a href="#"><li>Press Releases</li></a>
                        </ul>
                    </div>
                    <div class="footer-section contact-form">
                        <h2>Stay Connected</h2>
                        <input type="text" placeholder="Enter Email..." ref="emailField" value={this.state.value} onChange = {this.emailUpdate}></input>
                        <button variant="secondary" size="sm" onClick={() => {this.refs.emailField.value=""; this.addEmail()}}>Sign Up</button>
     
                    </div>
                </div>
                <div class="footer-bottom">
                    &copy; BioTork 2019 | Designed By Group 5B
                </div>
    
            </div>
            </div>
            </>
        );
    }
}

    


export default Footer;