import React from "react";
import Project from "./Project";

import "../../styles/Projects.css";

function Projects(){

    const projects = [
        {
            projectName: "Expense Tracker",
            description: "An app which keep tracks of the expenses added by the user. The user can filter his/her expenses by year as well. It also shows the total amount spent by the user in a particular year by the user.",
            techStack: [],
            liveLink: "https://expense-tracker3.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/expense-tracker"

        },
        {
            projectName: "Movies Comparison",
            description: "Movies Fight is a web-app which displays the details about the the movie selected, by fetching the data from an API call. It can also be used to compare the two movies and find out which got the highest rating and revenue.",
            techStack: [],
            liveLink: "https://moviescomparison.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/Movies-Fight" 
        },
        {
            projectName: "Lights Out Game",
            description: "A ReactJS game where the player has to turn off all the lights on the board to win the game. The user can toggle the light of a particular box by clicking on it. But the catch is that the boxes which are surrounding that box, their lights also get toggle.",
            techStack: [],
            liveLink: "https://lights-out-game1.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/lights-out-game"
        },
        {
            projectName: "Color Box Maker",
            description: "A web app which asks the user for the input like height, width and background color of a box. Once the user provides a valid input, a box with those dimensions and properties will be created.",
            techStack: [],
            liveLink: "https://color-box-maker1.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/color-box-maker" 
        },
        {
            projectName: "Currency Converter",
            description: "",
            techStack: [],
            liveLink: "https://currency-converter-webapp.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/Web-Dev-Practice-Projects/tree/main/CurrencyConverter"
        }
    ];

    return (
        <div className="Projects">
            <h2 className="Projects-header">Projects</h2>
            <div class="Projects-container">
                {
                    projects.map(project => {
                        return <Project project = {project}/>
                    })
                }
            </div>
        </div>
    )
}

export default Projects;