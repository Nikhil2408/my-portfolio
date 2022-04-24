import React from "react";

import certi_badge from "../../images/AWS_SAA_Badge.png";
import "../../styles/Certification.css";

function Certification(){
    return (
        <div className="Certification">
            <h2 className="Certification-header">Certification</h2>
            <div className="Certification-container">
                <div className="Certification-details">
                    <h3>Write your description</h3>
                    <p><strong>Validity:</strong> October 1st 2021 - October 1st 2024</p>
                    <a href="#">Download Certificate</a>
                </div>
                <div className="Certification-badge">
                    <img src={certi_badge} />
                </div>
            </div>
        </div>
    )
}

export default Certification;