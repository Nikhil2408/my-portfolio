import React from "react";

import "../../styles/Experience.css";
import accenture_logo from "../../images/accenture_logo.jpg";

function Experience(){
    return (
        <div id="Experience" className="Experience">
            <h2 className="Experience-header">Experience</h2>
            <div className="Exp-cLogocName">
                    <img class="Experience-cLogo" src={accenture_logo} alt="Accenture Logo" />
                    <h2 className="Experience-cName">Accenture</h2>
                </div>
            <div className="Experience-container">
                <h3>Software Engineer</h3>
                <p>Sept 2020 - Present</p>
                <div className="Experience-work">
                    <ul>
                        <li>Wrote multiple complex queries in Oracle database to deliver client reports</li>
                        <li>Worked on setting up API endpoint on AWS API Gateway and authorizing the API call with Cognito Authorizer for an Internal Application</li>
                        <li>Worked on documenting the API Gateway endpoint on Swagger UI</li>
                        <li>Currently working on building new structure of the response to support new Genders and restrict them for few countries</li>
                        <li>Worked on a modification of spring batch job so that email notifications can be sent to candidates for their upcoming different exams as a reminder based on email template</li>
                        <li>Worked on fixing few bugs</li>
                        <li>Worked on resolving critical production issues.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;