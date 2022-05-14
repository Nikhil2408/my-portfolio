import React from "react";

import "../../styles/Project.css";

function Project(props){
    return (
        <div className="Project">
            <div>
                <div className = "Project-Name">{props.project.projectName}</div>
                <div className="Project-description">{props.project.description}</div>
                
            </div>
            <div class="Links">
                <div className="Project-techStack"> Tech Stack:  
                    <span>{
                        props.project.techStack.map((tech, index) => {
                            if(index === props.length - 1){
                                return ` ${tech} `
                            }
                            return ` ${tech} | `
                        })
                    }
                    </span>
                </div>
                <a className="primary" href={props.project.liveLink} target="_blank" rel="noreferrer">LIVE</a>
                <a className="secondary" href={props.project.sourceCodeLink} target="_blank" rel="noreferrer">Source Code</a>
            </div>
        </div>
    )
}

export default Project;