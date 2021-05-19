import React, {useState} from 'react'
import Home from '../Home/Home';
import './Login.css'
import fire from './FirebaseAuth.js'
import SignUp from './SignUp'
// import firebase from "firebase"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"




function Login(props) {
    
const[signedin,isSignedin]=useState(false)

console.log(signedin)
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const changeEmail=(e)=>{
        setEmail(e.target.value)
        console.log(email)

    }
    const changePassword=(e)=>{
        setPassword(e.target.value)

    }
     
    const handleChange=(e)=>{
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(email,password).then(()=>{
            alert("Logged in")
            console.log(isSignedin(!signedin))

        }).catch((error)=>{
            alert("error",error)
        })
      
    }
  
    const Logout=()=>{
        fire.auth().signOut();
        alert("logged out")
    }
    if(signedin){
        props.history.push("/home");
    }
    
   
    return (
  <form action="" onSubmit={handleChange}>

<div className="login-form">
<h1>Login</h1>
<label for="email"><b>Email</b></label>
    <input onChange={changeEmail} type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input onChange={changePassword} type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
    <button type="submit" className="registerbtn" onClick={handleChange}>Login</button>

</div>
  </form>

     
      
            
                
        
    )
}

export default Login