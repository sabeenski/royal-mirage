import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './JobPage.css'


class JobPage extends Component {
  state = {  }
  render() { 

    return ( 
      <div className="job-page">
        <h1>Purchasing Assistant</h1>
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
          <Link to= {'/purchasing-assistant'}><button>Apply Now</button></Link>
          <img src="images/folder.svg" alt="folder"/>
          <p>Share this job</p>
          <div className="social-media">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-google-plus-g"></i>
            <i className="far fa-envelope"></i>
            <i className="fas fa-print"></i>
          </div>
          <div className="more-jobs">
            <h4>Other Jobs in retail</h4>
            <div className="new-position">
              <h4>Retail Area Manager</h4>
              <p>Antwerp, Belgium</p>
            </div>
            <div className="not-found">
              <h4>Nothing Found</h4>
              <p>Sign up for a Career Alert</p>
            </div>
          </div>
        </div>

        <div className="department-info">
          <h3>About the department</h3>
          <p>Our department unites multiple disciplines with the shared goal of best servicing our stores around the globe.</p>
          <a href="#">Continue Reading</a>
        </div>
        
      </div>
     );
  }
}
 
export default JobPage;