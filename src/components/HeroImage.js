import "./HeroImageStyles.css";
import React from 'react'
import IntroImg from "../assects/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImage = () => {
    return (
        <div className="hero">
            <div className="mask">
             <img className="intro-img" src={IntroImg} alt="IntroImg"/> 
            </div>

            <div className="content">
                <p>Hi , I'M A Freelancer and Full Time Working professional</p>
                <h1>Full Stack Java Developer</h1>
                <div>
                    <Link to="/Project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn-light btn">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImage