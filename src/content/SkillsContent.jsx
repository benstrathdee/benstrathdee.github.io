import {
    faHtml5,
    faCss3,
    faSass,
    faJsSquare,
    faReact,
    faJava,
    faGit,
} from "@fortawesome/free-brands-svg-icons";

import {
    faFireAlt,
    faDatabase,
    faFileSignature,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";

import {
    projectOldPortfolio,
    projectHTMLCalculator,
    projectMorseCode,
    projectCommerceSite,
    projectGoogleBooks,
    projectJavaCalculator,
    projectJavaCardGame,
    projectPokerHandSolver,
} from "./ProjectsContent";

const skillOne = {
    title: "HTML / CSS / SASS",
    id: "item1",
    content: [
        `I still remember writing my first HTML and CSS in an attempt to make my own custom tumblr theme way back in 2010. Thankfully I can say my skills have come a long way since then!`,
        `These days, I'm proficient with HTML, CSS, and SASS (SCSS), but largely choose to work with ReactJS. I've made some simple websites (such as my old portfolio made near the start of the coding boot camp), and especially enjoy attempting to recreate existing sites/things from static images as I find it a great problem solving task.`,
        `When I'm working on personal projects or things of a less serious nature, I always try to leave some sort of gimmick or personal touch.`,
    ],
    projects: [projectOldPortfolio, projectHTMLCalculator],
    icons: [faHtml5, faCss3, faSass],
};

const skillTwo = {
    title: "JavaScript / ReactJS",
    id: "item2",
    content: ["blah blah blah"],
    projects: [projectMorseCode, projectGoogleBooks, projectCommerceSite],
    icons: [faJsSquare, faReact],
};

const skillThree = {
    title: "Java",
    id: "item3",
    content: ["blah blah blah"],
    projects: [
        projectJavaCalculator,
        projectJavaCardGame,
        projectPokerHandSolver,
    ],
    icons: [faJava],
};

const skillFour = {
    title: "Git (Git Bash)",
    id: "item4",
    content: ["blah blah blah"],
    projects: [],
    icons: [faGit],
};

const skillFive = {
    title: "TDD (Jest / JUnit)",
    id: "item5",
    content: ["blah blah blah"],
    projects: [projectPokerHandSolver],
    icons: [faFileSignature],
};

const skillSix = {
    title: "SQL (MySQL)",
    id: "item6",
    content: ["blah blah blah"],
    projects: [],
    icons: [faDatabase],
};

const skillSeven = {
    title: "Google Firestore",
    id: "item7",
    content: ["blah blah blah"],
    projects: [projectCommerceSite],
    icons: [faFireAlt],
};

const skillEight = {
    title: "Misc.",
    id: "item8",
    content: ["blah blah blah"],
    projects: [],
    icons: [faQuestion],
};

export const skillsList = [
    skillOne,
    skillTwo,
    skillThree,
    skillFour,
    skillFive,
    skillSix,
    skillSeven,
    skillEight,
];
