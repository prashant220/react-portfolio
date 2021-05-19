import React from 'react'
import './Project.css'
import react from '../assets/react.png'
import js from '../assets/js-logo.png'
function Project() {
    return (
        <div>
             <div className="project-header">
         <h1>My recent works</h1>
         <p>Here are the projects</p>
    
        </div>
        <div className="project-cards">

            <div className="project-lists">
                <img src={react} alt="" />
                <h1 className="project-heading">Project titlle</h1>
                <p className=" project-paragraph">Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. </p>
             
            </div>
            <div className="project-lists">
            <img src={react} alt=""  />
            <h1 className="project-heading">Project titlle</h1>
                <p className=" project-paragraph">Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. </p>
            </div>
            <div className="project-lists">
            <img src={react} alt=""  />
            <h1 className="project-heading">Project titlle</h1>
                <p className=" project-paragraph">Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. </p>
            </div>

        </div>
        </div>
    )

        
       
}

export default Project
