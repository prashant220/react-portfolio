import React from 'react'
import './Skill.css'
import react from '../assets/react.png'
import js from '../assets/js-logo.png'


function Skill() {
    return (
        <div className="cards-skill">
          <div className="card-item" style={{marginBottom:'80px'}}>
              <img src={react} alt="" />
            
          </div>
          <div className="card-item">
              <img src={js} alt="" />
              
          </div>
          <div className="card-item">
          <img src={react} alt="" />
          </div>
         
        
         
        </div>
    )
}

export default Skill
