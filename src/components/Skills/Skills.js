import React from "react";
import "../../styles/Skills.css";
import html5 from "../../images/html5.svg";
import css3 from "../../images/css3.svg";
import javascript from "../../images/javascript.svg";
import aws from "../../images/aws.svg";
import mongodb from "../../images/mongodb.svg";
import nodejs from "../../images/nodejs.png";
import redux from "../../images/redux.png";
import express from "../../images/express.png";
import git from "../../images/git.png";
import reactQuery from "../../images/react-query.png";
import reactRouterDOM from "../../images/react-router-dom.png";
import tailwind from "../../images/tailwind.png";
import reacttestinglibrary from "../../images/react_testing_library.jpg";
import reactjs from "../../images/react.png";
import typescript from "../../images/typescript.png";

const firstSkillSet = [
  { label: "ReactJS", icon: reactjs, imageAlt: "React JS Logo" },
  { label: "JavaScript", icon: javascript, imageAlt: "JavaScript Logo" },
  { label: "TypeScript", icon: typescript, imageAlt: "TypeScript Logo" },
  { label: "Redux", icon: redux, imageAlt: "Redux Logo" },
  {
    label: "React Router DOM",
    icon: reactRouterDOM,
    imageAlt: "React Router DOM Logo",
  },
  { label: "React Query", icon: reactQuery, imageAlt: "React Query Logo" },
  {
    label: "React Testing Library",
    icon: reacttestinglibrary,
    imageAlt: "Enzyme Logo",
  },
  { label: "Tailwind CSS", icon: tailwind, imageAlt: "Tailwind CSS Logo" },
];

const secondSkillSet = [
  { label: "Node JS", icon: nodejs, imageAlt: "Node.js Logo" },
  { label: "Express.js", icon: express, imageAlt: "Express.js Logo" },
  { label: "MongoDB", icon: mongodb, imageAlt: "MongoDB Logo" },
  { label: "HTML5", icon: html5, imageAlt: "HTML5 Logo" },
  { label: "CSS3", icon: css3, imageAlt: "CSS3 Logo" },
  { label: "Git", icon: git, imageAlt: "Git Logo" },
  { label: "AWS Cloud", icon: aws, imageAlt: "AWS Cloud Logo" },
];

function Skills() {
  return (
    <div className="Skills">
      <h2 className="Skills-header">Skills and Technologies</h2>
      <div className="Skills-container">
        <div className="firstSkillSet">
          {firstSkillSet.map((skill) => {
            return (
              <div className="Skills-skill">
                <img src={skill.icon} alt={skill.imageAlt} />
                {skill.label}
              </div>
            );
          })}
        </div>
        <div className="secondSkillSet">
          {secondSkillSet.map((skill) => {
            return (
              <div className="Skills-skill">
                <img src={skill.icon} alt={skill.imageAlt} />
                {skill.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
