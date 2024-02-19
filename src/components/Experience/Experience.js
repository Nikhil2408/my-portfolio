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
                <h3>Intuit Hiring Portal</h3>
                <div className="Experience-work">
                    <ul>
                        <li>Implemented configuration-driven code to dynamically adjust hiring portal form fields based on user country, enhancing code maintainability and scalability.</li>
                        <li>Developed a summary page for displaying user-entered details from multiple forms, with code configuration ensuring cross-country compatibility and scalability.</li>
                        <li>Successfully implemented a virtual keyboard for Hebrew language text fields for Israel country, prioritizing accessibility while developing the feature from scratch.</li>
                        <li>Managed post-deployment bugs to mitigate impact on candidate hiring processes.</li>
                        <li>Spearheaded the adoption of Test-Driven Development (TDD) practices using the Enzyme testing library, resulting in a significant reduction in post-deployment bugs.</li>
                        <li>Developed reusable UI components and widgets, which helped us in ensuring consistency in design and functionality in multiple assets.</li>
                        <li>Conducted code reviews and provided constructive feedback, resulting in improved code quality.</li>
                        <li>Regularly showcased project milestones and product features to clients, ensuring a clear understanding of the technical aspects.</li>
                    </ul>
                </div>
            </div>
            <div className="Experience-container">
                <h3>ETS TOEFL</h3>
                <div className="Experience-work">
                    <ul>
                        <li>Implemented new gender options within the create/update profile flow for targeted countries, integrating UI field validations to ensure data accuracy and compliance.</li>
                        <li>Wrote multiple complex queries in Oracle to deliver client reports.</li>
                        <li>Prepared a complete new response structure to send the supported genders to mobile team for specific countries and restrict them for all the other countries.</li>
                        <li>Worked with tax team to make changes in the exisiting API call to calculate the tax on the new order items.</li>
                        <li>Played a crucial role in identifying and resolving critical production bugs, minimizing impact on real-time users.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;