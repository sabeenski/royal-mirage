import React, { Component } from 'react';
import './JobForm.css'
import { Link } from 'react-router-dom'
import ThankYouPage from './ThankYouPage';



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
    file:'',
    applicationSent: false,
    errors:{}
  }

  validateForm = () => {
    if(this.state.firstName.length <= 0){
      this.state.errors.firstName = "Please enter minimum 2 characters."
    } else this.state.errors.firstName = ''

    if(this.state.lastName.length <= 0){
      this.state.errors.lastName = "Please enter minimum 2 characters."
    } else this.state.errors.lastName = ''
    

    if(this.state.emailAddress.includes('@')){
      this.state.errors.emailAddress = ''
    } else this.state.errors.emailAddress = 'Please enter a valid email address.'

    if(this.state.address.length <= 0){
      this.state.errors.address = "Please enter minimum 2 characters."
    } else this.state.errors.address = ''

    if(this.state.houseNumber.length <= 0){
      this.state.errors.houseNumber = "Please enter minimum 2 numeric characters."
    } else this.state.errors.houseNumber = ''

    if(this.state.zipCode.length <= 3 ){
      this.state.errors.zipCode = "Please enter minimum 5 numeric characters."
    } else this.state.errors.zipCode = ''
    
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value     
    })
    this.validateForm()
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

  handleClick3 = (e) => {
    if(!this.state.file) alert('Please check all the required fields are filled up!')

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
      file:'',
      applicationSent: true
    })
  }

   
  render() { 
    console.log(this.state.firstName)
    return (  
      <div className="container">
        <h2 className="job-intro">Apply for</h2>
        <p className="job-position">Purchasing Assistant | Royal Mirage | Amsterdam</p>
        <div className="container-1">
            <form onSubmit={this.handleSubmit}>
              <div className="job-form-col-1">

                <p>Personal details*</p>
                <input type="text" minLength="2" maxLength="50" placeholder="First Name" name="firstName" title="2 characters minimum"value={this.state.firstName} onChange={this.handleChange} required/>
                <div className="errorMsg">{this.state.errors.firstName}</div>

                <br/><input type="text" minLength="2" maxLength="50" placeholder="Last Name"  name="lastName" value={this.state.lastName} onChange={this.handleChange}required/>
                <div className="errorMsg">{this.state.errors.lastName}</div>

                <br/><input type="email" placeholder="Email Address" name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange}required/>
                <div className="errorMsg">{this.state.errors.emailAddress}</div>

                <br/><input type="text" minLength="2" maxLength="50" placeholder="Home Address" name="address" value ={this.state.address} onChange={this.handleChange}required/>
                <div className="errorMsg">{this.state.errors.address}</div>

                <br/><input type="number" minLength="2" placeholder="House Number" name="houseNumber" value={this.state.houseNumber} onChange={this.handleChange} required/ >
                <div className="errorMsg">{this.state.errors.houseNumber}</div>

                <br/><input type="number" minLength="5" maxLength="20" placeholder="Zip Code" name="zipCode" value={this.state.zipCode} onChange={this.handleChange} required/ >
                <div className="errorMsg">{this.state.errors.zipCode}</div>

              </div>

              <br/><span id="gender">Sex: </span><input type="radio" name="sex" value={this.state.sex} onChange={this.handleClick1} required/><label>Male</label><input type="radio" name="sex" value={this.state.sex} onChange={this.handleClick2} required/><label for>Female</label>
              
              <div className="job-form-col-2">
                <br/><label>Date of Birth: <input type="date" placeholder="dd/mm/yyyy" name="dateOfBirth" value={this.state.birth} onChange={this.handleChange} required/></label>
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
                <input type="checkbox" required/>I agree to the <span><Link to={'/'}> privacy statement.* </Link></span>
                <button className="button-cta" type="submit" onClick={this.handleClick3}>APPLY</button>

                {this.state.applicationSent && <ThankYouPage />}

              </div>
            </form>
        </div>
      </div>
      
    );    
  }
}
 
export default JobForm;