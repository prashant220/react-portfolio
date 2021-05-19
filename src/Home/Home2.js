import React from 'react'
import './Home2.css'
import avatar from '../assets/avatar.svg'
import PanToolIcon from '@material-ui/icons/PanTool';

const Home = (props) => {
    return (
        
           < div className="container">
        
          <div className="avatar">
              <img src={avatar} alt=""  />
              <div className="text-avatar" >
             
             <h1>LET ME <span className="name">INTRODUCE</span>MYSELF</h1> 
             <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry… 🤷‍♂️</p>
             <p>I am fluent in classics like
             <i>
               <b className="name"> C++, Javascript and Lorem. </b>
             </i></p>
             <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ;
             <i>
               <b className="purple">Web Technologies and Products </b> and
               also in areas related to{" "}
               <b className="name">
               Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
               </b>
             </i></p>
             <p> Whenever possible, I also apply my passion for developing products
             with
             <i>
               <b className="name"> Modern Javascript Frameworks</b>
             </i>
             &nbsp; like
             <i>
               <b className="name"> Node.js and React.js</b>
             </i></p>
             
         </div>
          
              
              
          </div>
         
        </div>

    
        
    )
}

export default Home
