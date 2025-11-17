import React from "react";

import aws_badge from "../../images/AWS_SAA_Badge.png";
import ibm_badge from "../../images/Cloud_Computing_IBM_Badge.png";
import "../../styles/Certification.css";

function Certification() {
  return (
    <div id="Certification" className="Certification">
      <h2 className="Certification-header">Certification</h2>
      <div className="Certification-container">
        <div className="Certification-details">
          <div>
            Upskilled myself by learning various AWS services like IAM, S3, EC2,
            RDS, DynamoDB, Load Balancer, Lambda, API Gateway.
          </div>
          <a
            href="https://drive.google.com/file/d/1H-RbpRrGKmLfAmq2HcXqbAqGGUK6w69Z/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate
          </a>
          <a
            href="https://www.credly.com/badges/d6c100fd-3f8a-4b2a-ac78-1fa9c84b7fd8"
            target="_blank"
            rel="noreferrer"
          >
            Verify Badge
          </a>
        </div>
        <div className="Certification-badge">
          <img src={aws_badge} alt="certi-badge" />
        </div>
      </div>
      <div className="Certification-container">
        <div className="Certification-details">
          <div>
            Got an opportunity to get enrolled in Cloud Computing and
            Virtualization course offered by IBM to brush up skills in Cloud
            Computing.
          </div>
          <a
            href="https://drive.google.com/file/d/1KH7F1R4vipivlwembEZxE2tnwAIDmVJU/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate
          </a>
          <a
            href="https://www.credly.com/badges/90250559-f719-4822-a856-3806d75b2335"
            target="_blank"
            rel="noreferrer"
          >
            Verify Badge
          </a>
        </div>
        <div className="Certification-badge">
          <img src={ibm_badge} alt="certi-badge" />
        </div>
      </div>
    </div>
  );
}

export default Certification;
