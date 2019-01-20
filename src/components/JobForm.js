import React, { Component } from 'react';
import './JobForm.css'
import { Link } from 'react-router-dom'


class JobForm extends Component {
  state = {  
    firstName:'',
    dateOfBirth:'',
    address:'',
    emailAddress:'',
    lastName:'',
    sex:'',
    zipCode:'',
    houseNumber:'',
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
      address:'',
      emailAddress:'',
      lastName:'',
      sex:'',
      zipCode:'',
      houseNumber:'',
      motivationLetter:'',
      file:''
    })
  }

   
  render() { 
    console.log(this.state)
    return (  
      <div className="container">
        <h2 className="job-intro">Apply for</h2>
        <p className="job-position">Purchasing Assistant | Royal Mirage | Amsterdam</p>
        <div className="container-1">
            <form onSubmit={this.handleSubmit}>
              <div className="job-form-col-1">
                <p>Personal details*</p>
                <input type="text" minLength="2" maxLength="50" placeholder="First Name" name="firstName" title="2 characters minimum"value={this.state.firstName} onChange={this.handleChange}required/>
                <br/><input type="text" minLength="2" maxLength="50" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange}required/>
                <br/><input type="email" minLength="2" maxLength="50" placeholder="Email address" name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange}required/>
                <br/><input type="text" minLength="2" maxLength="50" placeholder="Home Address" name="address" value ={this.state.address} onChange={this.handleChange}required/>
                <br/><input type="number" placeholder="House number" name="houseNumber" value={this.state.houseNumber} onChange={this.handleChange} required/ >
                <br/><input type="tel" minLength="5" maxLength="20" pattern="^[0-9\(\)\s+-]+$" placeholder="Zip Code" name="zipCode" value={this.state.zipCode} onChange={this.handleChange} required/ >
              </div>
                <br/><span id="gender">Sex: </span><input type="radio" name="sex" value={this.state.sex} onChange={this.handleClick1} required/><span>Male<input type="radio" name="sex" value={this.state.sex} onChange={this.handleClick2} required/>Female</span>
              <div className="job-form-col-2">
                <br/><label>Date of Birth: <input type="date" placeholder="Date of birth" name="dateOfBirth" value={this.state.birth} onChange={this.handleChange} required/></label>
              </div>
              <div className="job-form-col-3">
                <p>Your motivation*</p>
                <textarea id="motivation-box" rows="4" cols="50" placeholder="Write a short motivation letter. Max 300 words." name="motivationLetter" value={this.state.motivationLetter} onChange={this.handleChange} maxLength="300" required></textarea>
              </div>
              <div className="job-form-col-4">
                <p>Attach your documents (pdf, doc(x), txt, rtf max.4Mb)</p>
                <p>Upload your resume* 
                <input type="file" id="file" name="file" value={this.state.file} accept=".doc,.docx,.txt,.pdf,.rtf" onChange={this.handleChange} required />
                <label htmlFor="file" id="file-upload" required>BROWSE</label><span id="file-name">{this.state.file.slice(12)}</span>
                <br/>
                {/* <button>DROPBOX</button> */}
                </p>
                <input type="checkbox" required/>Yes, I agree to the <a href="#">privacy statement.*</a>
                {!this.state.file && <button className="button-cta" type="submit">APPLY</button>}
                {this.state.file && <Link to={'purchasing-assistant/application-successful'}><button className="button-cta" type="submit">APPLY</button></Link>}
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.emailAddress}</p>
                <p>{this.state.phoneNumber}</p>
              </div>
            </form>
        </div>
      </div>
      
    );    
  }
}
 
export default JobForm;