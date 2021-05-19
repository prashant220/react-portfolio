import React, {useState} from 'react'
import fire from './FirebaseAuth.js'
import './SignUp.css'
import Login from './Login'
import Home from '../Home/Home'
import Firelogin from './Firelogin'
import { Link } from 'react-router-dom'


function SignUp(props) {
    const[loggedIn,setLoggedIn]=useState(false)
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const changeEmail=(e)=>{
        setEmail(e.target.value)
        console.log(email)

    }
    const changePassword=(e)=>{
        setPassword(e.target.value)

    }
     
    const handleSubmit=()=>{
     
        fire.auth().createUserWithEmailAndPassword(email,password).then(()=>{
            alert("Registered")
        }).catch((error)=>{
            alert("error",error)
        })
        console.log(loggedIn)
    }
    
   
    return (

        <form action="" onSubmit={handleSubmit}>

        <div className="login-form">
        <h1>Register</h1>
        <label for="email"><b>Email</b></label>
            <input onChange={changeEmail} type="text" placeholder="Enter Email" name="email" id="email" required/>
        
            <label for="psw"><b>Password</b></label>
            <input onChange={changePassword} type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            <button type="submit" className="registerbtn" onClick={handleSubmit}>Register</button>
        
        </div>
        <div className="container signin">
            <p>Already have an account? <Link to="/login"> Sign in</Link>.</p>
          </div>
          <Firelogin/>
        
          </form>
           
           
    )
}

export default SignUp;

