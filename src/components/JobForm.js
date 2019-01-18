import React, { Component } from 'react';

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
    motivationLetter:''
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

  handleSubmit = (e) =>{
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
      motivationLetter:''
    })
  }

  render() { 
    console.log(this.state)
    return (  
      <div className="job-form">
        <h2>Apply for the position of Purchasing Assistant</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="job-form-col-1">
              <p>Personal details*</p>
              <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange}required/>
              <br/><input type="date" placeholder="Date of birth" name="dateOfBirth" value={this.state.birth} onChange={this.handleChange} required/>
              <br/><input type="text" placeholder="City" name="city" value ={this.state.city} onChange={this.handleChange}required/>
              <br/><input type="email" placeholder="Email address" name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange}required/>
            </div>
            <div className="job-form-col-2">
              <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange}required/>
              <br/>Sex: <input type="radio" name="sex" value={this.state.sex} onChange={this.handleClick1} required/><span>Male<input type="radio" name="sex" value={this.state.sex} onChange={this.handleClick2} required/>Female</span>
              
              <br/><input type="text" placeholder="Country" name="country" value={this.state.country} onChange={this.handleChange} required/>
              <br/><input type="number" placeholder="Phone number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required/>
            </div>
            <div className="job-form-col-3">
              <p>Your motivation*</p>
              <input type="text" placeholder="Write a short motivation letter. Max 300 words." name="motivationLetter" value={this.state.motivationLetter} onChange={this.handleChange} maxLength="300" required/>
            </div>
            <div className="job-form-col-4">
              <p>Attach your documents (pdf, doc(x), jpg max.4Mb)</p>
              <p>Resume* <button>UPLOAD</button> <button>DROPBOX</button></p>
              <p>Portfolio <button>UPLOAD</button> <button>DROPBOX</button></p>
              <p>Photo <button>UPLOAD</button> <button>DROPBOX</button></p>
              <input type="checkbox"/>Send me a copy <button type="submit">APPLY FOR THIS JOB</button>
            </div>
          </form>
      </div>
    );
  }
}
 
export default JobForm;