import React, { useState } from "react";
import Project from "./Project";

import "../../styles/Projects.css";

function Projects(){

    const projects = [
        {
            projectName: "Birthdays Tracker",
            description: "An app which helps me to track birthdays of my closed ones. It shows the upcoming birthdays for the current month and has the feature to add new friends birthdays as well.",
            techStack: ["ReactJS", "CSS3", "firebase"],
            liveLink: "https://birthdays-tracker.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/birthdays-tracker"
        },
        {
            projectName: "Stock Images",
            description: "Stock Images is a ReactJS app which fetches images using Unsplash API call on page load. On scrolling down till end of page, app make a different API call to fetch more images. It also gives the flexibility to search specific types of images using keywords.",
            techStack: ["ReactJS", "CSS3"],
            liveLink: "https://stock-images1.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/stock-images"
        },
        {
            projectName: "Expense Tracker",
            description: "An app which keep tracks of the expenses added by the user. The user can filter his/her expenses by year as well. It also shows the total amount spent by the user in a particular year.",
            techStack: ["ReactJS", "CSS3"],
            liveLink: "https://expense-tracker3.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/expense-tracker"

        },
        {
            projectName: "Color Shade Generator",
            description: "An app which asks the user for a valid color input. It generates various shades of that color and gives the ability to the user to copy the required shade by just simple clicking over that it.",
            techStack: ["ReactJS", "CSS3"],
            liveLink: "https://color-shades-generator1.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/color-shade-generator" 
        },
        {
            projectName: "Movies Comparison",
            description: "Movies Comparion is a web-app which displays the details about the the movie selected, by fetching the data from an API call. It also compares the two movies selected by user to find which has got the highest rating and revenue.",
            techStack: ["HTML5", "CSS3", "JavaScript"],
            liveLink: "https://moviescomparison.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/Movies-Fight" 
        },
        {
            projectName: "Currency Converter",
            description: "A webapp which enables the easy conversion of currency values based on present-day exchange rates using Exchange Rate API.",
            techStack: ["HTML5", "CSS3", "JavaScript"],
            liveLink: "https://currency-converter-webapp.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/Web-Dev-Practice-Projects/tree/main/CurrencyConverter"
        },
        {
            projectName: "Lights Out Game",
            description: "A ReactJS game where the player has to turn off all the lights on the board to win the game. The user can toggle the light of a particular box by clicking on it. But the catch is that the light of the boxes surrounding that box also gets toggle.",
            techStack: ["ReactJS", "CSS3"],
            liveLink: "https://lights-out-game1.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/lights-out-game"
        },
        {
            projectName: "Color Box Maker",
            description: "A web app which asks the user for the input like height, width and background color of a box. Once the user provides a valid input, a box with those dimensions and properties will be created.",
            techStack: ["ReactJS", "CSS3"],
            liveLink: "https://color-box-maker1.netlify.app/",
            sourceCodeLink: "https://github.com/Nikhil2408/color-box-maker"
        }
    ];

    const [showMore, setShowMore] = useState(false);

    function toggleShowMore(){
        setShowMore(showMore => !showMore);
    }

    return (
        <div id="Projects" className="Projects">
            <h2 className="Projects-header">Projects</h2>
            <div class="Projects-container">
                {
                    projects.map((project, index) => {
                        if(index < 6)
                            return <Project project = {project} length = {project.techStack.length}/>
                        else if(index > 5 && showMore)
                            return <Project project = {project} length = {project.techStack.length}/>
                    })
                }
            </div>
            {
                showMore
                ?
                <button onClick={toggleShowMore}>Show Less &lt;&lt; </button>
                :
                <button onClick={toggleShowMore}>Show More &gt;&gt; </button>
            }
        </div>
    )
}

export default Projects;