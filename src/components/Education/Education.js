import React from "react";

import "../../styles/Education.css";

function Education(){
    return (
        <div className="Education">
            <h2 className="Education-header">Education</h2>
            <div className="Edu">
                <h2>GLA University</h2>
                <p>Bachelor of Technology - BTech, Computer Science with Specilization in Cloud Computing by IBM</p>
                <p>May 2016 - August 2020</p>
                <p>Grade: 8.01 CPI</p>
            </div>
            <div className="Edu">
                <h2>Simpkins School</h2>
                <p>10+2 Intermediate</p>
                <p>2014 - 2016</p>
                <p>Grade - 91%</p>
            </div>
            <div className="Edu">
                <h2>Ragendra Swarup Public School</h2>
                <p>High School</p>
                <p>2013 - 2014</p>
                <p>Grade - 88.4%</p>
            </div>
        </div>
    )
}

export default Education;