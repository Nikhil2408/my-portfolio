import React from "react";

import certi_badge from "../../images/AWS_SAA_Badge.png";
import "../../styles/Certification.css";

function Certification(){
    return (
        <div className="Certification">
            <h2 className="Certification-header">Certification</h2>
            <div className="Certification-container">
                <div className="Certification-details">
                    <div>Upskilled myself by learning various AWS services like IAM, S3, EC2, RDS, DynamoDB, Load Balancer, Lambda, API Gateway.</div>
                    <p><span>Validity: </span>October 1st 2021 - October 1st 2024</p>
                    <a href="https://drive.google.com/file/d/1h4YW9iAwwUaVObltatYusQG0R0PrzVh0/view?usp=sharing" target = "_blank">View Certificate</a>
                    <a href="https://www.credly.com/badges/d6c100fd-3f8a-4b2a-ac78-1fa9c84b7fd8" target="_blank">Verify Badge</a>
                </div>
                <div className="Certification-badge">
                    <img src={certi_badge} />
                </div>
            </div>
        </div>
    )
}

export default Certification;