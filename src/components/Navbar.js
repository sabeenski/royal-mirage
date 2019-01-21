// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import './Navbar.css'


// class Navbar extends Component {
//   state = { 
//     isBurgerMenuOn: false
//    }

//   handleClick = () => {
//     this.setState({
//       isBurgerMenuOn: !this.state.isBurgerMenuOn
//     })
//   }

//   render() { 
//     return ( 
//       <div>
//           <nav className="navbar">
//             <div id="burger-nav" onClick={this.handleClick}></div>
//             <ul className={this.state.isBurgerMenuOn ? "open" : "close"}>
//               <Link to={'/'}><li>Home</li></Link> 
//               <Link to={'/'}><li>Jobs</li></Link>
//               <Link to={'/'}><li>About</li></Link>
//               <Link to={'/'}><li>Departments</li></Link>
//               <Link to={'/'}><li>Contact</li></Link>
//               <Link to={'/'}><h2 className="logo">Royal Mirage</h2></Link>       
//             </ul>
//             <img src="images/open-jobs-IT.jpg" alt="jobs" width="100%"/>
//           </nav>

//       </div>

//     );
//   }
// }
 
// export default Navbar;


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
              <Link to={'/'}><li className="logo">Royal Mirage</li></Link>       
              <Link to={'/'}><li onClick={this.handleClick}>Contact </li></Link> 
              <Link to={'/'}><li onClick={this.handleClick}>Departments</li></Link>
              <Link to={'/'}><li onClick={this.handleClick}>About</li></Link>
              <Link to={'/careers/purchasing-assistant'}><li onClick={this.handleClick}>Jobs</li></Link>
              <Link to={'/'}><li onClick={this.handleClick}>Home</li></Link>
            </ul>
          </nav>

          {/* <div className="side-nav">
            <Link to={'/'}><span className="btn-close" onClick={this.handleClick}>&times;</span></Link> 
            <Link to={'/'}><span className="logo">Royal Mirage</span></Link>       
            <Link to={'/'}>Home</Link> 
            <Link to={'/'}>Jobs</Link>
            <Link to={'/'}>About</Link>
            <Link to={'/'}>Departments</Link>
            <Link to={'/'}>Contact</Link>
          </div> */}
          <img src="images/open-jobs-IT.jpg" alt="jobs" width="100%"/>

      </div>

    );
  }
}
 
export default Navbar;


 

