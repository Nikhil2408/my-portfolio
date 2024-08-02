import React from "react";
import "../../styles/Skills.css";
import html5 from "../../images/html5.svg";
import css3 from "../../images/css3.svg";
import javascript from "../../images/javascript.svg";
import aws from "../../images/aws.svg";
import oracleDB from "../../images/oracle-db.png";
import mongodb from "../../images/mongodb.svg";
import nodejs from "../../images/nodejs.png";
import redux from "../../images/redux.png";
import express from "../../images/express.png";
import git from "../../images/git.png";
import reactQuery from "../../images/react-query.png";
import reactRouterDOM from "../../images/react-router-dom.png";
import tailwind from "../../images/tailwind.png";
import enzyme from "../../images/enzyme.jpg";

function Skills() {
  return (
    <div className="Skills">
      <h2 className="Skills-header">Skills and Technologies</h2>
      <div className="Skills-container">
        <div className="firstSkillSet">
          <div class="Skills-skill">
            <i class="fa-brands fa-react" alt="reactjs" />
            ReactJS
          </div>
          <div class="Skills-skill">
            <img src={javascript} alt="javascript" />
            JavaScript
          </div>
          <div class="Skills-skill">
            <img src={redux} alt="redux" />
            Redux
          </div>
          <div class="Skills-skill">
            <img src={aws} alt="awscloud" />
            AWS Cloud
          </div>
          <div class="Skills-skill">
            <img src={oracleDB} alt="oracleDB" />
            Oracle Database
          </div>
          <div class="Skills-skill">
            <img src={css3} alt="css3" />
            CSS3
          </div>
          <div class="Skills-skill">
            <img src={nodejs} alt="nodejs" />
            Node JS
          </div>
          <div class="Skills-skill">
            <img src={express} alt="express" />
            Express.js
          </div>
        </div>
        <div className="secondSkillSet">
          <div class="Skills-skill">
            <img src={mongodb} alt="mongodb" />
            Mongo DB
          </div>
          <div class="Skills-skill">
            <img src={html5} alt="html5" />
            HTML5
          </div>
          <div class="Skills-skill">
            <img src={git} alt="git" />
            Git
          </div>
          <div class="Skills-skill">
            <img src={reactQuery} alt="React Query" />
            React Query
          </div>
          <div class="Skills-skill">
            <img src={reactRouterDOM} alt="React Router DOM" />
            React Router DOM
          </div>
          <div class="Skills-skill">
            <img src={tailwind} alt="Tailwind CSS" />
            Tailwind CSS
          </div>
          <div class="Skills-skill">
            <img src={enzyme} alt="Enzyme Testing Library" />
            Enzyme Testing Library
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
