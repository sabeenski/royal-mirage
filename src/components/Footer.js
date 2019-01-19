import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component {
  state = {  }
  render() { 
    return (
      <div className="footer-box">
          <div className="col-1">
            <h5>Jobs At</h5>
            <li>Home</li>
            <li>Jobs</li>
            <li>About</li>
            <li>Department</li>
          </div>
          <div className="col-2">
            <h5>Information</h5>
            <li>F.A.Q</li>
            <li>Application process</li>
            <li>Private Policy</li>
            <li>Contact</li>
          </div>
          <div className="social-media">
            <h5>Follow us</h5>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-instagram"></i>
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

