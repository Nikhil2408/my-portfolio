import React from "react";

import "../../styles/NavBar.css";

function NavBar(){
    return (
        <nav className="NavBar">
            <h2 className = "NavBar-header">NB</h2>
            <ul className = "NavBar-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Certification</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;