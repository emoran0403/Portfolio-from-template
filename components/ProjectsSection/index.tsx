import React, { useState } from "react";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { Slider } from "gatsby-theme-portfolio-minimal/src/components/Slider";
import { Project } from "../Project";
import { PageSection } from "gatsby-theme-portfolio-minimal/src/types";
// @ts-ignore
import * as classes from "./style.module.css";

export function ProjectsSection(props: PageSection): React.ReactElement {
    const [projects] = useState([
        {
            title: "IdleScape",
            details: "IdleScape is a Full-Stack application and my final project for the Covalence bootcamp.",
            techStack: ["MongoDB", "Express", "React", "Redux", "Typescript", "NodeJS"],
            pageURL: "/idlegame",
            appURL: "https://ejmdev-idlescape.herokuapp.com/",
            gitHubURL: "https://github.com/emoran0403/Idle-Game",
            lab: false
        },
        {
            title: "Gundam Getter",
            details: "Gundam Getter is a personal project I worked on after the bootcamp for a friend at Gundam Planet who wanted to keep track of model kit release dates.\n  ",
            techStack: ["Google Sheets API", "Express", "React", "Typescript", "NodeJS", "Selenium"],
            pageURL: "/gundamgetter",
            appURL: "",
            gitHubURL: "https://github.com/emoran0403/Gundam-Getter",
            lab: false
        },
        {
            title: "Blogs Lab",
            details:
                "Blogs Lab is a Full Stack application from the Covalence bootcamp.  \n  Students are tasked with developing every aspect from the back-end to the front-end, \n  the MySQL database, the API endpoints, and the server to handle the endpoints.",
            techStack: ["MySQL", "Express", "React", "Typescript", "NodeJS"],
            pageURL: "/blogslab",
            appURL: "https://ejm-dev-blogs.fly.dev/",
            gitHubURL: "https://github.com/emoran0403/blogs-lab",
            lab: true
        },
        {
            title: "Studio Ghibli Lab",
            details:
                "The Studio Ghibli Lab is one of the first labs in the React section of the Covalence bootcamp.\n    Students are tasked with making fetch requests to an API, then displaying the data.",
            techStack: ["JavaScript", "React", "Create React App"],
            pageURL: "/studioghibli",
            appURL: "https://emoran0403.github.io/Nicer-Ghibli-App/#/",
            gitHubURL: "https://github.com/emoran0403/Nicer-Ghibli-App",
            lab: true
        },
        {
            title: "Just My Type Lab",
            details: "The Just My Type Lab is the last lab before the React section in the Covalence bootcamp.\n    Students are tasked with writing the logic to create a typing game.",
            techStack: ["HTML", "JavaScript", "CSS"],
            pageURL: "/justmytype",
            appURL: "https://emoran0403.github.io/Just-my-Type/",
            gitHubURL: "https://github.com/emoran0403/Just-my-Type",
            lab: true
        },
        {
            title: "Tic Tac Toe Lab",
            details: "Tic Tac Toe is the last lab in the prepwork section of the Covalence bootcamp.  \n  Students are tasked with coding a functional game using Javascript, HTML and CSS.",
            techStack: ["HTML", "JavaScript", "CSS"],
            pageURL: "/tictactoe",
            appURL: "https://emoran0403.github.io/Tic-Tac-Toe-Lab/",
            gitHubURL: "https://github.com/emoran0403/Tic-Tac-Toe-Lab",
            lab: true
        }
    ]);

    return (
        <Animation type="fadeIn">
            <Section anchor={props.sectionId} heading={props.heading}>
                <Slider additionalClasses={[classes.Projects]}>
                    {projects.map((project, key) => (
                        <Project key={key} index={key} data={project} />
                    ))}
                </Slider>
            </Section>
        </Animation>
    );
}
