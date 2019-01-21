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
              <ul className={this.state.isBurgerMenuOn ? "open" : "close"}>
                <Link to={'/'}><li>Contact</li></Link>
                <Link to={'/'}><li>Departments</li></Link>
                <Link to={'/'}><li>About</li></Link>
                <Link to={'/'}><li>Jobs</li></Link>
                <Link to={'/'}><li>Home</li></Link> 
                <Link to={'/'}><h2 className="logo">Royal Mirage</h2></Link>       
              </ul>
            <img src="images/open-jobs-IT.jpg" alt="jobs" width="100%"/>
          </nav>

      </div>

    );
  }
}
 
export default Navbar;


 
