import React from "react"
import "./Navbar.css"
const Navbar = () => {
    return(
        <div className="my-container">
        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         {/* Education */}
         
        <ul className="navbar-nav mr-auto links-container">
        <a className="make-white" href="#">About</a>
        <li className="nav-item">
          <a className="nav-link make-white" href="#Education1">
          Education
          </a>
      </li>

          {/* Resume!!!! done */}
          <li className="nav-item">
          <a className="nav-link make-white" href="https://doc-08-00-apps-viewer.googleusercontent.com/viewer/secure/pdf/fb6quoe1p9eqrs2o9laliektssahmn27/1dfm8fnc0lbrb59j7p5q3uqpku63oh9o/1594478925000/drive/04102189691806200982/ACFrOgCjzaPa7ofYxEjIDcDhZcFsfOGd-DDs3gSeywl_2CF56sUvuUk4_yjnmOgHOr9R3KV-o0HoIBAmbg94DDD7q5qgsCKJeP4KETrQ_XFM26Jg93bf_iAM-G-63DjczxcnWrIIYukjMcTKI2J-?print=true&nonce=b5va601peh87m&user=04102189691806200982&hash=8v9k65g6o8m4o6jl4nq74ba7n3b3ub99">Resume</a>
          </li>

          {/* Projects */}
          <li className="nav-item ">
          <a className="nav-link make-white" href="#Project1" >
          Projects
          </a>
          
      </li>

      <li className="nav-item">
          <a className="nav-link make-white" href="#Cert1">Certificates</a>
          </li>
      

      <li className="nav-item">
      <a className="nav-link make-white" href="#Extraactiv">Extra Curricular Activities</a>
      </li>
      
      
    </ul>
    
  </div>
</nav>
      </div>
        
    )
}

export default Navbar;