import React, { useState } from 'react';
import './Contact.css';


const Contact = () => {
  const[values,setValues]= useState({
    firstName:"",
    lastName:"",
    email:"",
    subject:""
  });
  const handleFirstNameChange=(event)=>{
    setValues({
      ...values,
      firstName:event.target.value
    })
  }
  const handleLastNameChange=(event)=>{
    setValues({
      ...values,
      lastName:event.target.value
    })
  }
  const handleEmailChange=(event)=>{
    setValues({
      ...values,
     email:event.target.value
    })
  }
  const handleSubjectChange=(event)=>{
    setValues({
      ...values,
     subject:event.target.value
    })
  }
  const[submitted,setSubmitted]=useState(false);
  const Success=(e)=>{
    e.preventDefault();
    if(values.firstName && values.lastName && values.email!==null){
      setValid(true)
    }
    setSubmitted(true)
    
  
  }
  const[valid,setValid]=useState(false)
    return (
        <div className="container">
          <form action="">
           { submitted && valid ?alert("success"):null}
          <label for="fname">First Name</label>
         <input className="contact-input" onChange={handleFirstNameChange} type="text" id="fname" name="firstName" placeholder="Your name.." value={values.firstName}/>
        {submitted && !values.firstName? <span className="danger">Please fill firstname</span>:null} <br />
         <label for="lname">Last Name</label>
    <input  className="contact-input"  onChange={handleLastNameChange} type="text" id="lname" name="lastName" placeholder="Your last name.." value={values.lastName}></input>
    {submitted && !values.lastName?<span className="danger">Please fill lastname</span>:null } <br />
    {/* <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select> */}
     <label for="email">Email</label>
    <input className="contact-email"  onChange={handleEmailChange} type="email" id="email" name="email" placeholder="Your email.." value={values.email}></input>
   {submitted && !values.email ? <span className="danger">Please fill email</span> :null} <br />
    <label for="subject">Subject</label>
    <textarea className="contact-email" onChange={handleSubjectChange} value={values.subject} id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
    {submitted && !values.subject?<span className="danger">Please fill subject</span>:null} <br />
    <input type="submit" value="Submit" onClick={Success}></input>
          </form>
       
        </div>
    )
}

export default Contact
