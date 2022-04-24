import React from "react";

import "../../styles/Skills.css";

function Skills(){
    return (
        <div className="Skills">
            <h2 className="Skills-header">Skills and Technologies</h2>
            <div className="Skills-container">
                <div className="firstSkillSet">
                    <div class="Skills-skill"><i class="fa-solid fa-check" />HTML5</div>
                    <div class="Skills-skill"><i class="fa-solid fa-check" />CSS3</div>
                    <div class="Skills-skill"><i class="fa-solid fa-check" />JavaScript</div>
                </div>
                <div className="secondSkillSet">
                    <div class="Skills-skill"><i class="fa-solid fa-check" />ReactJS</div>
                    <div class="Skills-skill"><i class="fa-solid fa-check" />AWS Cloud</div>
                    <div class="Skills-skill"><i class="fa-solid fa-check" />Java</div>
                </div>
            </div>
        </div>
    )
}

export default Skills;