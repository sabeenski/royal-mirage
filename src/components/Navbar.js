import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'


class Navbar extends Component {
  state = { 
    isBurgerMenuOn: false
   }

  handleClick = () => {
    this.setState({
      isBurgerMenuOn: !this.state.isBurgerMenuOn
    })
  }

  render() { 
    return ( 
      <div>
          <nav className="navbar">
            <div id="burger-nav" onClick={this.handleClick}></div>
            <div><Link to={'/'} className="logo">Royal Mirage</Link></div>  
            <div className="spacer"></div>     
            <ul className={this.state.isBurgerMenuOn ? "open" : "close"}>
              <Link to={'/'}><li onClick={this.handleClick}>Home</li></Link>
              <Link to={'/careers/purchasing-assistant'}><li onClick={this.handleClick}>Jobs</li></Link>
              <Link to={'/'}><li onClick={this.handleClick}>About</li></Link>
              <Link to={'/'}><li onClick={this.handleClick}>Departments</li></Link>
              <Link to={'/'}><li onClick={this.handleClick}>Contact </li></Link> 
            </ul>
          </nav>
          <img src="images/open-jobs-IT.jpg" alt="IT-jobs-royal-mirage" width="100%"/>

      </div>

    );
  }
}
 
export default Navbar;


 

