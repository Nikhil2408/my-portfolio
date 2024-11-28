import React from "react";

import "../../styles/Experience.css";
import accenture_logo from "../../images/accenture_logo.jpg";

function Experience() {
  return (
    <div id="Experience" className="Experience">
      <h2 className="Experience-header">Experience</h2>
      <div className="Exp-cLogocName">
        <img
          class="Experience-cLogo"
          src={accenture_logo}
          alt="Accenture Logo"
        />
        <h2 className="Experience-cName">Accenture</h2>
      </div>
      <div className="Experience-container">
        <h3>Intuit Hiring Portal</h3>
        <div className="Experience-work">
          <ul>
            <li>
              Automated the phone interview process, saving 4000+ manual hours
              and improving candidate portal adoption from 28% to 54.2%.
            </li>
            <li>
              Built configuration-driven code to adjust form fields by user
              country, boosting scalability and accelerating region-specific
              feature rollouts.
            </li>
            <li>
              Successfully implemented a virtual keyboard for Hebrew language
              text fields for Israel, prioritizing accessibility while
              developing the feature from scratch. This increased usability for
              Israeli candidates by 25%, as reported through user feedback and
              reduced input-related errors.
            </li>
            <li>
              Developed reusable UI components and widgets, which helped us in
              ensuring consistency in design and functionality in multiple
              assets. This reduced development time for similar features by 40%
            </li>
            <li>
              Managed post-deployment bugs to mitigate impact on candidate
              hiring processes.
            </li>
            <li>
              Spearheaded the adoption of Test-Driven Development (TDD)
              practices using the Enzyme testing library, resulting in a
              significant reduction in post-deployment bugs.
            </li>
            <li>
              Regularly showcased project milestones and product features to
              clients, resulting in enhanced trust and stronger collaboration
              between the technical team and stakeholders. This proactive
              communication ensured a clear understanding of technical aspects.
            </li>
          </ul>
        </div>
      </div>
      <div className="Experience-container">
        <h3>ETS TOEFL</h3>
        <div className="Experience-work">
          <ul>
            <li>
              Implemented new gender options within the create/update profile
              flow for targeted countries, integrating UI field validations to
              ensure data accuracy and compliance.
            </li>
            <li>
              Wrote multiple complex queries in Oracle to deliver client
              reports.
            </li>
            <li>
              Prepared a complete new response structure to send the supported
              genders to mobile team for specific countries and restrict them
              for all the other countries.
            </li>
            <li>
              Worked with tax team to make changes in the exisiting API call to
              calculate the tax on the new order items.
            </li>
            <li>
              Responsible for setting up API endpoint on AWS API Gateway and
              authorizing the API call with Cognito Authorizer and promoting it
              to production.
            </li>
            <li>
              Played a crucial role in identifying and resolving critical
              production bugs, minimizing impact on real-time users.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
