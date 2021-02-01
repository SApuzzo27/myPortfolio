import React from 'react';
import { Link } from "react-router-dom";

function NavBar () {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
        <p className="navbar-brand">SAMANTHA &nbsp; APUZZO </p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="navbar-nav">
            <li className="nav-item">
                < Link to={"/"}>
                <button className="nav-link" >About</button>
                </Link>
            </li>
            <li className="nav-item">
                < Link to={"/portfolio"} >
                <button className="nav-link" >Portfolio</button>
                </Link>
            </li>
            <li className="nav-item">
                < Link to={"/contact"}>
                <button className="nav-link" >Contact</button>
                </Link>
            </li>
            <li className="nav-item">
                < Link to={"/resume"} >
                <button className="nav-link" >Resume</button>
                </Link>
            </li>
            </div>
        </div>
        </nav>
    )
};


export default NavBar;