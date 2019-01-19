import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ThankYouPage.css'

class ThankYouPage extends Component {
  state = {  }
  render() { 
    console.log("hello")
    return ( 
      <div>
        <div className="thankyou">
          <p>Dear applicant!
            <br/> Thank you for your application to the position of Purchasing Assistant! 
            <br/> We have received your application and we will be processing it soon. 
            <br/> In the mean time, follow us on our social media if you are interested in keeping yourself updated about us.
          </p>
          <p>Best Regards,
            Team ....
          </p>
        </div>
        <div className="go-back"> <Link to={'/'}>Go Back</Link></div>

      </div>
     );
  }
}
 
export default ThankYouPage;