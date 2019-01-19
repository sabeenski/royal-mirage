import React, { Component } from 'react';
import './JobForm.css'
import { Link } from 'react-router-dom'


class JobForm extends Component {
  state = {  
    firstName:'',
    dateOfBirth:'',
    city:'',
    emailAddress:'',
    lastName:'',
    sex:'',
    country:'',
    phoneNumber:'',
    motivationLetter:'',
    file:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleClick1 = (e) => {
    this.setState({
      sex:'Male'
    })
  }
  handleClick2 = (e) => {
    this.setState({
      sex:'Female'
    })
  }

  handleSubmit = (e) => {

    e.preventDefault()
    this.setState({
      firstName:'',
      dateOfBirth:'',
      city:'',
      emailAddress:'',
      lastName:'',
      sex:'',
      country:'',
      phoneNumber:'',
      motivationLetter:'',
      file:''
    })
  }

   
  render() { 
    console.log(this.state)
    return (  
      <div className="container">
        <h2>Apply for the position of Purchasing Assistant</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="job-form-col-1">
              <p>Personal details*</p>
              <input type="text" minLength="2" maxLength="50" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange}required/>
              {/* <br/><span>Date of Birth: <input type="date" placeholder="Date of birth" name="dateOfBirth" value={this.state.birth} onChange={this.handleChange} required/></span> */}
              <br/><input type="text" minLength="2" maxLength="50" placeholder="City" name="city" value ={this.state.city} onChange={this.handleChange}required/>
              <br/><input type="email" minLength="2" maxLength="50" placeholder="Email address" name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange}required/>
            </div>
            <div className="job-form-col-2">
              <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange}required/>
              {/* <br/>Sex: <input type="radio" name="sex" value={this.state.sex} onChange={this.handleClick1} required/><span>Male<input type="radio" name="sex" value={this.state.sex} onChange={this.handleClick2} required/>Female</span> */}
              <br/><input type="text" minLength="2" maxLength="50" placeholder="Country" name="country" value={this.state.country} onChange={this.handleChange} required/>
              <br/><input type="number" minLength="2" maxLength="50" placeholder="Phone number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required/>
            </div>
            <div className="job-form-col-3">
              <p>Your motivation*</p>
              <textarea id="motivation-box" rows="4" cols="50" placeholder="Write a short motivation letter. Max 300 words." name="motivationLetter" value={this.state.motivationLetter} onChange={this.handleChange} maxLength="300" required></textarea>
            </div>
            <div className="job-form-col-4">
              <p>Attach your documents (pdf, doc(x), txt, rtf max.4Mb)</p>
              <p>Resume* 
                {/* <button className="upload-btn">UPLOAD</button> */}
              <input type="file" id="file" name="file" value={this.state.file} accept=".doc,.docx,.txt,.pdf,.rtf" onChange={this.handleChange} required />
              <button>DROPBOX</button></p>
              <input type="checkbox"/>Send me a copy 
              {!this.state.file && <button className="button-cta" type="submit">APPLY FOR THIS JOB</button>}
              {this.state.file && <Link to={'purchasing-assistant/application-successful'}><button className="button-cta" type="submit">APPLY FOR THIS JOB</button></Link>}
              <p>{this.state.firstName}</p>
              <p>{this.state.lastName}</p>
              <p>{this.state.emailAddress}</p>
              <p>{this.state.phoneNumber}</p>
            </div>
          </form>
      </div>
    );    
  }
}
 
export default JobForm;