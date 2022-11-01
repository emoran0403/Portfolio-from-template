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
      overview: [
        `IdleScape is an idle / incremental game based on the MMORPG Runescape. The player tells the game what
      they want to do, and the game executes those actions on an interval. The player can choose to train
      skills, go on quests, or engage in combat with various enemies. Options vary for each location the
      player may travel to.`,
      ],
      features: [
        `Auth process ensures no duplicate emails or player usernames.`,
        `Game actions send a chat message to the chat window component, with an option to toggle chat filters.`,
        `The game state is managed with Redux, and every state update writes to localStorage.`,
        `Every 5 minutes, the player's data is updated on the Mongo database.`,
        `The changelog is displayed in the lobby, keeping players up to date on recent changes and fixes.`,
      ],
      challenges: [
        `Staying organized was a big task with this project as there are a lot of interconnected parts. I made
      sure to keep data structures and nomenclature as consistent and patterned as possible, and I documented
      functions and left notes to simplify the workflow. When implementing new skills, I broke down the big
      ideas into smaller ones, then translated those small ideas into pseudocode, which lent itself nicely to
      actual code.`,
        `Redux and MongoDB were not part of the coursework, so implementing these were initially a challenge. To
      familiarize myself with Redux, I built a small app to update multiple slices of state in different ways
      to mimic the functionality of the final project with a much simpler implementation. Once the small app
      was complete, I expanded upon it as a framework and added in new features and functionality.`,
        `I wanted to make Idlescape as close to Runescape as I could, which meant using large amounts of varied
      data available on their wiki. I did not want to copy and paste everything manually, so I made some web
      scraping utility tools. My bookmarklets scraped a wiki page for the data I was looking for, such as
      quest data, monster information, etc., and logged it to the console in the form of an object. This
      vastly reduced the workload and simplified the workflow.`,
      ],
      details: "IdleScape is a Full-Stack application and my final project for the Covalence bootcamp.",
      techStack: ["MongoDB", "Express", "React", "Redux", "Typescript", "NodeJS"],
      IMGURL: "/idlegame",
      appURL: "https://ejmdev-idlescape.herokuapp.com/",
      gitHubURL: "https://github.com/emoran0403/Idle-Game",
      lab: false,
    },
    {
      title: "Gundam Getter",
      overview: [
        `My friend at Gundam Planet maintains a Google Sheet with 3000+ entries for upcoming model kit release
      dates for their customers. Updating this list requires checking one of their many distributors' websites
      for the information. This was done manually, and updating the entire list required around 8 hours of
      manual data entry.`,
        `Gundam Getter reads the SKU data from Google Sheets, then the server launches a headless Firefox browser
      via Selenium to scrape model kit release dates from select websites, then writes that data back to a
      Google Sheet.`,
      ],
      features: [
        `Utilizes Google Sheets API to authorize and authenticate read and write requests to the Google Sheet.`,
        `A headless Selenium Firefox browser to scrape web data.`,
        `If the release date cannot be found on the page, a link to the page is written to the Google Sheet for
      manual verification.`,
      ],
      challenges: [
        `Selenium is a very interesting and exciting tool to work with. My main complaint is that their DOM
      element selectors aren't exactly 1-to-1 with traditional DOM traversal methods. This required more time
      for trial and error than if they had simply been able to implement
      Document.get("ExactlyWhatIAmLookingFor").`,
        `Google APIs and their documentation was the most challenging part of this project. I felt like I was
      playing whack-a-mole with the debugging process: something would come up, I would check the docs to fix
      it, something new would come up that the first docs didn't warn about, and I would have to check the
      docs again.`,
        `Trying to deploy Gundam Getter was definitely the most frustrating part of the project. Every issue I
      had to address to get the project working locally came up again in a slightly different way in
      deployment. The build process on Heroku ran out of available memory and would not build - I had to
      convert it to a NextJS app to address this. Selenium required an older Heroku stack to run on. Firefox's
      binaries for Selenium had to be added to the project files itself since it wouldn't be running from my
      machine. Google APIs required a few additional steps the docs didn't really warn about.`,
        `In the end I decided to not deploy Gundam Getter, and instead teach my friend how to download the code
      from github and run the project locally.`,
      ],
      details:
        "Gundam Getter is a personal project I worked on after the bootcamp for a friend at Gundam Planet who wanted to keep track of model kit release dates.\n  ",
      techStack: ["Google Sheets API", "Express", "React", "Typescript", "NodeJS", "Selenium"],
      IMGURL: "/gundamgetter",
      appURL: ``,
      gitHubURL: "https://github.com/emoran0403/Gundam-Getter",
      lab: false,
    },
    {
      title: "Blogs Lab",
      overview: [
        `This Full-Stack CRUD application is the last major lab in the course, bringing all the previous learning
      together in one nice package. Users sign up with an email, and are issued a JSON Web Token for
      authentication / authorization purposes. Once registered, users may view other blog authors, or view and
      create blogs, and may edit or delete their own blogs. The JWT is utilized for editing and deleting
      blogs, verifying the author is the only one capable of editing or deleting their own content.`,
        `My Blogs Lab also incorporates Mailgun and Stripe. I've implemented Mailgun with a feature allowing
      users to send an email to an author. Stripe processess credit card payments, which I've implemented into
      a donate feature, letting users donate to other authors.`,
      ],
      features: [
        `Full-Stack CRUD app where users can securely register, view other authors, read, write, edit, and delete
      blogs.`,
        `Mailgun implemented allowing users to send emails to authors.`,
        `Stripe implemented allowing users to safely send money to authors.`,
      ],
      challenges: [
        `The toughest part of the lab was the size of the project compared to the previous labs. This was the
      first time there was a large number of components and features - it was not 'complete' when the lab was
      'done'. The first iteration did not have auth, mailgun, or stripe. Finishing this lab with all the
      intended features helped me become comfortable with bigger projects.`,
      ],
      details:
        "Blogs Lab is a Full Stack application from the Covalence bootcamp.  \n  Students are tasked with developing every aspect from the back-end to the front-end, \n  the MySQL database, the API endpoints, and the server to handle the endpoints.",
      techStack: ["MySQL", "Express", "React", "Typescript", "NodeJS"],
      IMGURL: "content/images/BlogsLab.PNG",
      appURL: "https://ejm-dev-blogs.fly.dev/",
      gitHubURL: "https://github.com/emoran0403/blogs-lab",
      lab: true,
    },
    {
      title: "Studio Ghibli Lab",
      overview: [
        `This was one of the first labs assigned after being introduced to React, and focused on fetching data
      from an external API. Landing on the home page triggers a fetch to the people, films, and locations
      endpoints. These return arrays of data, which I hold in the App component, and pass down as props to the
      individual components to avoid extra fetches on those components.`,
      ],
      features: [
        `Fetches data from the Studio Ghibli API, and displays the information as bootstrap cards.`,
        `This lab is built with create-react-app and displays data from three endpoints.`,
      ],
      challenges: [
        `The most challenging part of this lab was creating the relationships between the data given by the API
      endpoints. For example, the data for a particular film only lists character endpoints, not the specific
      character names. I wanted to display that additional information without incurring more fetch requests.
      I accomplished this by iterating through the list of movies, and for each movie, to then iterate through
      the list of characters. If the character ID provided by the movie matched that of the current character,
      I pushed the character name into an array. Then I mapped over the array displaying the character list.`,
      ],
      details:
        "The Studio Ghibli Lab is one of the first labs in the React section of the Covalence bootcamp.\n    Students are tasked with making fetch requests to an API, then displaying the data.",
      techStack: ["JavaScript", "React", "Create React App"],
      IMGURL: "/studioghibli",
      appURL: "https://emoran0403.github.io/Nicer-Ghibli-App/#/",
      gitHubURL: "https://github.com/emoran0403/Nicer-Ghibli-App",
      lab: true,
    },
    {
      title: "Just My Type Lab",
      overview: [
        `Just My Type is a typing game built entirely with HTML, CSS, and JS. The player types the sentences
      shown on the screen, restarting the sentence if they make a mistake. The game also times the player and
      records their mistakes, showing a score at the end.`,
      ],
      features: [
        `On-screen keyboard, highlighting buttons as they are pressed, and swapping to an uppercase keyboard when
      the shift button is held.`,
        `The player's time and mistakes are recorded, showing up as a score when the game is over.`,
      ],
      challenges: [
        `There was a lot of conditional logic behind the scenes. Every key press had to be evaluated as it could
      have been the wrong key, the end of a particular word, or the end of the sentence, and each of those
      changes had to update something elsewhere. This was where I found the value in abstracting out repeated
      logic into smaller functions to clean up code. With clever contextual function names, the newly cleaned
      up code almost read like high level instructions - a pattern I tried to implement in my future projects.`,
      ],
      details:
        "The Just My Type Lab is the last lab before the React section in the Covalence bootcamp.\n    Students are tasked with writing the logic to create a typing game.",
      techStack: ["HTML", "JavaScript", "CSS"],
      IMGURL: "/justmytype",
      appURL: "https://emoran0403.github.io/Just-my-Type/",
      gitHubURL: "https://github.com/emoran0403/Just-my-Type",
      lab: true,
    },
    {
      title: "Tic Tac Toe Lab",
      overview: [
        `Your basic Tic Tac Toe, Noughts and Crosses, or X's and O's game. Clicking in a square places the symbol
      for the current player. Every turn the game checks for a winner, or when the board is full, displays
      Draw! When the game is over, there is an option to reset the board and play again.`,
      ],
      features: [
        `1 function checks the entire board for a winning condition after every turn.`,
        `The game resets the board after a win or draw.`,
      ],
      challenges: [
        `This was one of the first labs in the course that brought together the concepts taught in the HTML, CSS,
      and JS sections, with a healthy dose of "If you don't know it, google it". One of the small things not
      explicitly covered (and the most difficult part about this lab) was adding the defer attribute to the
      script tag in the html file to ensure the DOM tree loaded before the script attempted to add the event
      listeners. Turns out I could have just put the script tag at the end of the body as well.`,
      ],
      details:
        "Tic Tac Toe is the last lab in the prepwork section of the Covalence bootcamp.  \n  Students are tasked with coding a functional game using Javascript, HTML and CSS.",
      techStack: ["HTML", "JavaScript", "CSS"],
      IMGURL: "/tictactoe",
      appURL: "https://emoran0403.github.io/Tic-Tac-Toe-Lab/",
      gitHubURL: "https://github.com/emoran0403/Tic-Tac-Toe-Lab",
      lab: true,
    },
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
