import React from "react";

import "../../styles/Project.css";

function Project(props){
    return (
        <div className="Project">
            <div className = "Project-Name">{props.project.projectName}</div>
            <div className="Project-description">{props.project.description}</div>
            <div className="Project-techStack"> Tech Stack:  
                {
                    props.project.techStack.map((tech, index) => {
                        if(index === props.length - 1){
                            return ` ${tech} `
                        }
                        return ` ${tech} | `
                    })
                }
            </div>
            <a href={props.project.liveLink} target="_blank" rel="noreferrer">LIVE</a>
            <a href={props.project.sourceCodeLink} target="_blank" rel="noreferrer">Source Code</a>
        </div>
    )
}

export default Project;