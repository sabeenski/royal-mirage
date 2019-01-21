import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ThankYouPage.css'

class ThankYouPage extends Component {
  state = {  }
  render() { 
    console.log("hello")
    return ( 
      <div className="modal">
        <div className="modal-content">
          <h3>Dear applicant,</h3>
            <br/> <p> You have successfully applied to the position of Purchasing Assistant! 
            <br/> We have received your application and we will be processing it soon. 
            <br/> In the mean time, feel free to follow us on our social media to keep yourself updated about us.</p>
            <h3>Thank You for applying!</h3>
          <p>
            <br/>
             <span>Best Regards,
                Team Royal Mirage</span>
          </p>
          <Link to={'/'}><button className="go-back"> Go Back</button></Link>
        </div>

      </div>
     );
  }
}
 
export default ThankYouPage;