import React from "react";

import "../../styles/AboutMe.css";
import avatar from "../../images/Avatar.svg";
// import hello from "../../images/hello.png";
import ConnectWithMe from "../ConnectWithMe/ConnectWithMe";

import "../../styles/ConnectWithMe.css";

function AboutMe() {
  return (
    <div id="home" className="AboutMe">
      <div className="AboutMe-avatarC">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="AboutMe-intro">
        {/* <div className="AboutMe-gesture">Hi There, <img src={hello} alt="hello" /></div> */}
        <div className="AboutMe-gesture">Hi There 👋</div>
        <div className="AboutMe-name">I am Nikhil Bansal</div>
        <div className="AboutMe-details">
          React.js Developer with 5 years of hands-on experience in React,
          TypeScript, and modern web architecture. I build fast, scalable UI
          systems, optimize performance, and ship features that directly impact
          business metrics. Comfortable owning features end-to-end — from design
          discussions to production testing.
        </div>
        <a
          href="https://drive.google.com/file/d/12fIn5oNjl1JOKMDyvgEXdBVoEHxYl62k/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <div className="ConnectWithMe">
          <div>Connect With Me!!</div>
          <ConnectWithMe />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
