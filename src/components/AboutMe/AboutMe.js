import React from "react";

import "../../styles/AboutMe.css";
import avatar from "../../images/Avatar.svg";
import hello from "../../images/hello.png";
import ConnectWithMe from "../ConnectWithMe/ConnectWithMe";

import "../../styles/ConnectWithMe.css";

function AboutMe(){
    return (
        <div className="AboutMe">
            <div className="AboutMe-avatarC">
                <img src={avatar} alt="avatar"/>
            </div>
            <div className="AboutMe-intro">
                <div className="AboutMe-gesture">Hi There, <img src={hello} alt="hello" /></div>
                <div className="AboutMe-name">I am Nikhil Bansal</div>
                <div className="AboutMe-details">I am a software engineer currently working in Accenture. I did my B.Tech in Computer Science and got graduated in 2020.</div>
                <a href="#" rel="noreferrer">Resume</a>
                <div className="ConnectWithMe">
                    <div>Connect With Me!!</div>
                    <ConnectWithMe />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;