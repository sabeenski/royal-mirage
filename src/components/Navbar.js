import React, { Component } from 'react';
class Navbar extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <div className="nav-wrapper">
          <a href="#">Logo</a>
          <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>About</li>
            <li>Departments</li>
            <li>Contact</li>
            <li><input type="box" placeholder="Search for jobs by keyboard"></input></li>
          </ul>
        </div>
        <img src="images/open-jobs-IT.jpg" alt="jobs" width="100%"/>
      </div>

    );
  }
}
 
export default Navbar;