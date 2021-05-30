import React, {  useEffect,useState } from 'react';
import './Home.css'
import homelogo from '../assets/home.svg'
import PanToolIcon from '@material-ui/icons/PanTool';
import Home2 from './Home2.js'
import Connect from './Connect.js'
import firebase from "firebase"

import fire from '../Login/FirebaseAuth'




const Home = (props) => {
   
    var text=['Prashant Poudel']
    var counter=0;
    var index=0;
   setInterval(run,400)
       
   const LogOut=()=>{
    fire.auth().signOut();
    props.history.push("/");
}

      

    function run(){
        if(counter===text.length){
            counter=0
        }
        var select= text[counter];
        var move= select.slice(0,++index);
        var type=document.querySelector(".type-name");
        // type.textContent=fire.auth().currentUser.displayName
        if(move.length===select.length){
            counter++;
            index=0
        }
        
    }
    
    return (
        <div>
              < div className="flex-container">
          <div className="text" >
              <h1>Hi There! <PanToolIcon className="wave"/></h1>
              <h1>I am <span className="type-name"></span></h1> 
             
              <button onClick={LogOut}>Sign out!</button>
            
          </div>
          <div className="image">
              <img src={homelogo} alt=""  />
              
          </div>
     
        </div>
        <Home2/>
        <Connect/>

        </div>
        
    )
}

export default Home
