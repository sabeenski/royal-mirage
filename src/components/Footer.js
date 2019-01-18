import React, { Component } from 'react';
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
          <div className="col-3">
            <h5>Follow us</h5>
            <div className="media-1">
              <li>Newsletter</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Tumblr</li>
              <li>LinkedIn</li>
            </div>
            <div className="media-2">
              <li>Facebook</li>
              <li>Pinterest</li>
              <li>YouTube</li>
              <li>Google+</li>
            </div>

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

