import React from "react";

import "../../styles/Project.css";

function Project(props){
    return (
        <div className="Project">
            <div className = "Project-Name">{props.project.projectName}</div>
            <div className="Project-description">{props.project.description}</div>
            <div className="Project-techStack"> Tech Stack:  
                {
                    props.project.techStack.map(tech => {
                        return ` ${tech}, `
                    })
                }
            </div>
            <a href="#">LIVE</a>
            <a href="#">Source Code</a>
        </div>
    )
}

export default Project;