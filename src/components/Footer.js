import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyle.css"

import React from 'react'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>502 F wing Ambadkar Nagar Near One International Center</p>
                            <p>prabhadevi Mumbai India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            +91 7720811386
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                           <a href="mailto: tejasgopale111@gmail.com" style={{ color: "white", textDecoration: "none" }}>
                           tejasgopale111@gmail.com
                           </a>
                        </h4>
                    </div>

                </div>

                <div className="right">
                    <h4>About me</h4>
                    <p>This is me Tejas Gopale. Currently working with Bhilosa
                        Industry and Open to work for Frelancer.
                        I enjoy discussing new Projects and designs challenges.</p>
                    <div className="social">
                    
                    <a href="https://www.instagram.com/its_tejasgopale_0001" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} style={{ color: "white", marginRight: "2rem" }} />
                    </a>

                    <a href="https://github.com/Tejas-Gopale" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} style={{ color: "white", marginRight: "2rem" }} />
                    </a>

                    <a href="https://www.linkedin.com/in/tejas-gopale-java-developer2807/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20} style={{ color: "white", marginRight: "2rem" }} />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
