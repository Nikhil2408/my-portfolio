import React from "react";

import gmail from "../../images/gmail.svg";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";
import twitter from "../../images/twitter.svg";

function ConnectWithMe(){
    return (
        <div className="ConnectWithMe-all">
            <div><a href="mailto:nikbansal1998@gmail.com"><img src={gmail} alt = "gmail" /></a></div>
            <div><a href="https://www.linkedin.com/in/nikhil-bansal24/" target="_blank"><img src={linkedin} alt="linkedin"/></a></div>
            <div><a href="https://github.com/Nikhil2408" target="_blank"><img src={github} alt="github"/></a></div>
            <div><a href="https://twitter.com/Nikhil_B_24" target="_blank"><img src={twitter} alt="twitter"/></a></div>
        </div>
    )
}

export default ConnectWithMe;