import React from "react";
import "./Navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';



function Navbar() {
  const change=()=>{
    
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
      navbarLinks.classList.toggle('active')
    


  
  }


  return (
   
  
    <nav className="navbar">
    <div className="brand-title">Prashant</div>
    <a href="#" className="toggle-button" onClick={change} >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </a>
    <div className="navbar-links">
      <ul>
        <li className="list" >
          {" "}
          <NavLink exact to="/home" activeClassName="active">
            Home{" "}
          </NavLink>
        </li >
        <li className="list">
           <NavLink exact to="/about" activeClassName="active">
            About
           </NavLink>
         </li>
         <li className="list">
           <NavLink exact to="/project" activeClassName="active">
            Project
          </NavLink>
         </li>
         <li className="list">
           <NavLink exact to="/contact" activeClassName="active">
             Contact
           </NavLink>
         </li>
        
      </ul>
    </div>
  </nav>
   
  );
}

export default Navbar;
