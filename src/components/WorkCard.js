import "./WorkCardStyle.css";
import React from 'react'
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

export const WorkCard = (props) => {

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default navigation
        // alert("Client not allowed to share"); // Show the alert message
        Swal.fire({
            icon: 'success',
            title: 'Sorry ..!',
            text: 'Client Done Not Alloweded to shear View and Source.',
          });
    };

    return (
        <div className="prject-card">
            <img src={props.imgsrc} alt="project-img" />
            <h2 className="project-tital">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btn">
                    <NavLink to="#" className="btn" onClick={handleClick}>View</NavLink>
                    <NavLink to="#" className="btn" onClick={handleClick}>Source</NavLink>
                </div>
            </div>
        </div>
    )
}
