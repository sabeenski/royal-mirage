import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component {
  state = {  }
  render() { 
    return (
      <div className="footer-box">
        <div className="social-media">
          <h5>Follow us</h5>
          <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>
        
        <div className="col-2">
          <h5>Information</h5>
          <li>F.A.Q</li>
          <li>Application process</li>
          <li>Private Policy</li>
          <li>Contact</li>
        </div>
        <div className="col-1">
          <h5>Jobs At</h5>
          <li>Home</li>
          <li>Jobs</li>
          <li>About</li>
          <li>Department</li>
        </div>
        <div className="col-4">
          <h5>Job Alert</h5>
          <li>Subscribe to our job alert</li>
        </div>
      </div>  
      
    );
  }
}
 
export default Footer;

