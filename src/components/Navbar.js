import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

  const [click , setClick] = useState(false);

  // for changing the Background Colour
  const [color, setColor] = useState(false);

  const changecolour = () => {
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll",changecolour)
  //function to hamburger funcunal 
  const handleClick = () =>{  setClick(!click)  }

  return (
    <div className= { color ? "header header-bg":"header"}>
        <Link to="/">
            <h1>Tejas portfolio</h1>
        </Link>

        <ul className= { click ? "nav-menu active" : "nav-menu" }>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Project">Project</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {/* <li>
            <Link to="/Resume">Resumes</Link>
          </li> */}
        </ul>

        {/* hamnavagar menu  */}
        <div className="hamburger" onClick={handleClick}>
          { 
            click ?
               (<FaTimes size={20} style={{color: "#fff"}}/> ) 
              : 
               (<FaBars size={20} style={{color: "#fff"}}/>)
          }
        </div>
    </div>
  )
}

export default Navbar