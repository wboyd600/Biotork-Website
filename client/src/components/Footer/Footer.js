import React from 'react';
import request from 'superagent';
import './Footer.css';
import logo from '../../assets/BioTork_High_Definition_Logo.png';

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
            <head>
	<meta charset="utf-8"></meta>
	<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
	<meta name="keywords" content="footer, address, phone, icons" ></meta>
	
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></link>
 
</head>
	<body>
        <footer class="footer-mobile-responsive">
 
			<div class="footer-left">
          <img src={ logo }></img>
				<div class="footer-quick-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>About Us</li></a>
                            <a href="#"><li>Technology</li></a>
                            <a href="#"><li>Company Timeline</li></a>
                            <a href="#"><li>Press Releases</li></a>
                        </ul>
                    </div>
 
				<p class="footer-company-text">© 2019 BioTork</p>
			</div>
 
			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					  <p><span>2153 SE Hawthorned Rd
						 #130</span>
						Gainesville, FL 32641</p>
				</div>
 
				<div>
					<i class="fa fa-phone"></i>
					<p>352-505-8611</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:info@biotork.com">info@biotork.com</a></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
                    <h3>About BioTork</h3>
					Here at BioTork, our mission is to improve world 
                        sustainability and the environmental conditions 
                        of our planet for generations to come.
                        <span>Stay Connected</span></p>
                        <input type="text" placeholder="Enter Email..." ref="emailField" value={this.state.value} onChange = {this.emailUpdate}></input>
                        <button variant="secondary" size="sm" onClick={() => {this.refs.emailField.value=""; this.addEmail()}}>Sign Up</button>
				<div class="footer-icons">
                    <a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-instagram"></i></a>
					<a href="#"><i class="fa fa-youtube"></i></a>
				</div>
			</div>
		</footer>
	</body>
    </>
        );
    }
}

    


export default Footer;