import React from "react";

import "../../styles/AboutMe.css";
import avatar from "../../images/undraw_feeling_proud_qne1.svg";

function AboutMe(){
    return (
        <div className="AboutMe">
            <div className="AboutMe-avatarC">
                <img src={avatar}/>
            </div>
            <div className="AboutMe-intro">
                <h1 className="AboutMe-name">I am Nikhil</h1>
                <h3 className="AboutMe-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tortor diam, lobortis mollis lorem malesuada quis. Vivamus ut ante nisi. Integer cursus nibh quis ligula</h3>
                <a href="#">Resume</a>
            </div>
        </div>
    )
}

export default AboutMe;