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
              Led development of the Job Templates and Requisitions modules,
              enabling recruiters to create job opportunities and improving
              overall hiring process efficiency
            </li>
            <li>
              Built configuration-driven code to adjust form fields by user
              country, boosting scalability and accelerating region-specific
              feature rollouts.
            </li>
            <li>
              Developed reusable UI components and widgets, which helped us in
              ensuring consistency in design and functionality in multiple
              assets. This reduced development time for similar features by 30%
            </li>
            <li>
              Managed post-deployment bugs to mitigate impact on candidate
              hiring processes.
            </li>
            <li>
              Introduced TDD practices with React Testing Library, leading to a
              significant reduction in post-deployment issues.
            </li>
            <li>
              Presented project updates and features to clients, fostering
              stronger collaboration and trust with stakeholders
            </li>
          </ul>
        </div>
      </div>
      <div className="Experience-container">
        <h3>ETS TOEFL</h3>
        <div className="Experience-work">
          <ul>
            <li>
              Wrote complex Oracle queries to generate detailed client reports.
            </li>
            <li>
              Designed a response structure to provide supported gender data to
              mobile teams for specific regions while restricting others.
            </li>
            <li>
              Collaborated with the tax team to update API calls for accurate
              tax calculations on new order items.
            </li>
            <li>
              Configured and deployed API endpoints on AWS API Gateway with
              Cognito Authorizer, ensuring a seamless production rollout.
            </li>
            <li>
              Identified and resolved critical production bugs, reducing
              downtime by 30%.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
