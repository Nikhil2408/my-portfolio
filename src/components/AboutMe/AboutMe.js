import React from "react";

import "../../styles/AboutMe.css";
import avatar from "../../images/Avatar.svg";
// import hello from "../../images/hello.png";
import ConnectWithMe from "../ConnectWithMe/ConnectWithMe";

import "../../styles/ConnectWithMe.css";

function AboutMe(){
    return (
        <div id="home" className="AboutMe">
            <div className="AboutMe-avatarC">
                <img src={avatar} alt="avatar"/>
            </div>
            <div className="AboutMe-intro">
                {/* <div className="AboutMe-gesture">Hi There, <img src={hello} alt="hello" /></div> */}
                <div className="AboutMe-gesture">Hi There 👋</div>
                <div className="AboutMe-name">I am Nikhil Bansal</div>
                <div className="AboutMe-details">A passionate frontend web developer. Currently, working as a frontend software developer in Accenture. I have been working on technologies like JavaScript, ReactJS, Node.js and MongoDB.</div>
                <a href="https://drive.google.com/file/d/1CeTqGsJY7XioFWFwl1-MvuStfreoomSf/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                <div className="ConnectWithMe">
                    <div>Connect With Me!!</div>
                    <ConnectWithMe />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;