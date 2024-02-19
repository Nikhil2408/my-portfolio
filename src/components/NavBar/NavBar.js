import React from "react";

import "../../styles/NavBar.css";

function NavBar(){

    return (
        <nav className="NavBar" >
            <h2 className = "NavBar-header">NB</h2>
            <ul className = "NavBar-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#Certification">Certification</a></li>
                <li><a href="#Experience">Experience</a></li>
                {/* <li><a href="#Projects">Projects</a></li> */}
            </ul>
        </nav>
    )
}

export default NavBar;