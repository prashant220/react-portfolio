
import React, {Component} from 'react'
import Home from '../Home/Home';
import firebase from "firebase"
import {  withRouter} from 'react-router-dom';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class Firelogin extends Component{
    state={
        isSignedIn:false
    }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID
        
        ],
        callbacks: {
          signInSuccess: () => false
        }
      }
      componentDidMount = () => {
          
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ isSignedIn: !!user })
          console.log("user", user)
         
        })
      }
  
      
 
      render(){
          if(this.state.isSignedIn){
            this.props.history.push("/home");
          }
        return( 
          
     
            <div>
           
                  
                <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            
                  

            </div>
          
    
        )
    }
    

}
export default withRouter (Firelogin);
