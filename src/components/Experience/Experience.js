import React from "react";

import "../../styles/Experience.css";

function Experience(){
    return (
        <div id="Experience" className="Experience">
            <h2 className="Experience-header">Experience</h2>
            <div className="Exp-container">
                <h2 className="Exp-companyName">Accenture</h2>
                <ul>
                    <li>Worked on complex queries in Oracle Database</li>
                    <li>Worked on setting up API endpoint on AWS API Gateway and authorizing the API call with Cognito Authorizer</li>
                    <li>Worked on a batch job to modify it to send the notifications to candidates for different exams based on email template </li>
                    <li>Worked on setting up batch jobs through a software - Active Batch Console</li>
                    <li>Worked as a production support engineer to resolve production issues</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience;