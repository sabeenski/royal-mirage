import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './JobPage.css'


class JobPage extends Component {
  
  render() { 

    return ( 
      <div className="job-page">
        <h1 className="job-position">Purchasing Assistant</h1>
        <div className="job-details">
          <h2>Job Description</h2>
            <p>
            Takes care of initial and operational purchasing and assists the Material Planner at the purchase of BOM materials, spare parts for the manufacturing department Assembly/Test and Non Product Related materials
            </p>
          <h2>Task and Responsibilities </h2>
            <p>
              Requests quotes and agrees upon prices and other conditions. Comes to an agreement with suppliers in consultation with the Director Strategic Purchasing and the Controller about the terms of delivery and payment.Places orders based on authorized purchasing orders where except for the already granted suppliers, is stipulated at which supplier the order is placed in consultation with the Supply Chain Manager.Checks all incoming order confirmations.Manages all unfinished purchase orders, namely: expedites, monitors and informs customers about the progress and collects data for the management report.Archives Purchase Orders.Checks invoices for services and receives them in the BaaN system.Maintain contacts with the suppliers about price development and delivery performance.Assists the Material Planner with performance information, with analyzing the purchase package and with reporting to suppliers.Stimulates the use of preferred suppliers.Identifies improvement possibilities and participates in the implementation of improvement plans.
            </p>
          <h2>Profile</h2>
          <li>At least intermediate or MBO level of educationat minimum 3 years experience working in a Purchasing department </li>
          <li>Skills on working with ERP System (BaaN) and MS Office, especially Excel </li>
          <li>Fluent in English language </li>
          <li>Accurate and “hands-on” mentality </li>
          <li>Flexible and output focused on high quality output </li>
          <li>Open communicator, well with people</li>
          <Link to= {'/careers/purchasing-assistant'}><button className="button-cta">Apply Now</button></Link>
          <p>Share this job!</p>
          <div className="social-media">
            <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="https://facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://google.com/" target="_blank"><i className="fab fa-google-plus-g"></i></a>
            <a href="https://gmail.com/" target="_blank"><i className="far fa-envelope"></i></a>
            <i className="fas fa-print" onClick={window.print}></i>
          </div>
        </div>
        <div className="FAQ">
          <h3 style={{fontSize:'30px'}}>F.A.Q</h3>
          <p>Want to know more about the application process? Have more questions? </p>
          <a href="#">Click here to explore more</a>
        </div>
        
      </div>
     );
  }
}
 
export default JobPage;