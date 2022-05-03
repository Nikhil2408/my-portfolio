import React from "react";

import "../../styles/Skills.css";
import html5 from "../../images/html5.svg";
import css3 from "../../images/css3.svg";
import javascript from "../../images/javascript.svg";
import aws from "../../images/aws.svg";
import java from "../../images/java.svg";


function Skills(){
    return (
        <div className="Skills">
            <h2 className="Skills-header">Skills and Technologies</h2>
            <div className="Skills-container">
                <div className="firstSkillSet">
                    <div class="Skills-skill"><img src={html5} />HTML5</div>
                    <div class="Skills-skill"><img src={css3} />CSS3</div>
                    <div class="Skills-skill"><img src={javascript} />JavaScript</div>
                </div>
                <div className="secondSkillSet">
                    <div class="Skills-skill"><i class="fa-brands fa-react" />ReactJS</div>
                    <div class="Skills-skill"><img src={aws} />AWS Cloud</div>
                    <div class="Skills-skill"><img src={java} />Java</div>
                </div>
            </div>
        </div>
    )
}

export default Skills;