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

import { OldPortfolio, HTMLCalculator } from "../images";

const skillOne = {
	title: "HTML / CSS / SASS",
	number: 1,
	content: [
		`I still remember writing my first HTML and CSS in an attempt to make my own custom tumblr theme way back in 2010. Thankfully I can say my skills have come a long way since then!`,
		`These days, I'm proficient with HTML, CSS, and SASS (SCSS), but largely choose to work with ReactJS. I've made some simple websites (such as my old portfolio made near the start of the coding boot camp), and especially enjoy attempting to recreate existing sites/things from static images as I find it a great problem solving task.`,
		`When I'm working on personal projects or things of a less serious nature, I always try to leave some sort of gimmick or personal touch.`,
	],
	projects: [
		{
			name: "Old Portfolio",
			description:
				"Made during the earlier days of the _nology boot camp as a test of my skills at the time. It might not be a depiction of my current abilities, but it serves as a good display of how far I've come!",
			projectImage: OldPortfolio,
			link: "https://github.com/benstrathdee/old-portfolio",
		},
		{
			name: "Calculator",
			description:
				"The _nology boot camp tasked me with recreating an image of a calculator in HTML/CSS and giving it functionality with JS. The calculator I chose can be found in the project files on GitHub! I always enjoy getting to recreate an existing product like this.",
			projectImage: HTMLCalculator,
			link: "https://github.com/benstrathdee/calculator-project",
		},
	],
	icons: [faHtml5, faCss3, faSass],
};

const skillTwo = {
	title: "JavaScript / ReactJS",
	number: 2,
	content: ["blah blah blah"],
	projects: [],
	icons: [faJsSquare, faReact],
};

const skillThree = {
	title: "Java",
	number: 3,
	content: ["blah blah blah"],
	projects: [],
	icons: [faJava],
};

const skillFour = {
	title: "Git (Git Bash)",
	number: 4,
	content: ["blah blah blah"],
	projects: [],
	icons: [faGit],
};

const skillFive = {
	title: "TDD (Jest / JUnit)",
	number: 5,
	content: ["blah blah blah"],
	projects: [],
	icons: [faFileSignature],
};

const skillSix = {
	title: "SQL (MySQL)",
	number: 6,
	content: ["blah blah blah"],
	projects: [],
	icons: [faDatabase],
};

const skillSeven = {
	title: "Google Firestore",
	number: 7,
	content: ["blah blah blah"],
	projects: [],
	icons: [faFireAlt],
};

const skillEight = {
	title: "Misc.",
	number: 8,
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
