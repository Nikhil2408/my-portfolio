import React from "react";

import "../../styles/AboutMe.css";
import avatar from "../../images/Avatar.svg";
import hello from "../../images/hello.png";

function AboutMe(){
    return (
        <div className="AboutMe">
            <div className="AboutMe-avatarC">
                <img src={avatar}/>
            </div>
            <div className="AboutMe-intro">
                <div className="AboutMe-gesture">Hi There, <img src={hello} /></div>
                <div className="AboutMe-name">I am Nikhil Bansal</div>
                <div className="AboutMe-details">I am a software engineer currently working in Accenture. I did my B.Tech in Computer Science and got graduated in 2020.</div>
                <a href="#">Resume</a>
            </div>
        </div>
    )
}

export default AboutMe;