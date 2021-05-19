import React from 'react'
import './About.css'
import Skill from './Skill'
import about from '../assets/about.png'

const About = () => {
    return (
        <div >
          <div className="about-container">
          <div className="about-text">
            <h1 className="about-header">Know who <span className="purple">I'M</span></h1>
            <p>Hi Everyone, I am <span className="purple"> Prashant poudel</span> from <span className="purple">kathmandu.</span>
I am a .</p>
     <p className="apart">Apart from coding, some other activities that I love to do!</p>
     <ul className="about-list">
       <li>Travel</li>
       <li>Read</li>
       <li>Write</li>
     </ul>
          </div>
          <div className="aboutpic" >
            <img src={about} alt=""  className="about-img"/>
            </div>
      
            
            </div>
            <h1 className="skill-heading" style={{marginTop:'50px'}}>Proffesional <span className="purple"> Skillset</span></h1>
            <Skill/>
        </div>
        
    )
}

export default About
