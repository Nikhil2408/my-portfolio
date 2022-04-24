import React from "react";

import certi_badge from "../../images/AWS_SAA_Badge.png";
import "../../styles/Certification.css";

function Certification(){
    return (
        <div className="Certification">
            <h2 className="Certification-header">Certification</h2>
            <div className="Certification-container">
                <div>
                    <h3>I am AWS Solution Arhictect Associate Certified. Learned Couple of services like EC2, S3.</h3>
                    <p>Validity: </p>
                    <a href="#">Download Certificate</a>
                </div>
                <div>
                    <img src={certi_badge} />
                </div>
            </div>
        </div>
    )
}

export default Certification;