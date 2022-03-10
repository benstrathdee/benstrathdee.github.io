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
	// faQuestion,
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
	points: [
		"Proficient in raw HTML + CSS",
		"Proficient with SASS CSS preprocessor",
		"Proficient with ReactJS (That's what this site was built in!)",
	],
	projects: [projectOldPortfolio, projectHTMLCalculator],
	icons: [faHtml5, faCss3, faSass],
};

const skillTwo = {
	title: "JavaScript / ReactJS",
	id: "item2",
	content: [
		"My first taste of actual programming was learning some Javascript while working in a call center role to develop a tool that automated a process that management was finding tedious.",
		"Since then I've more formally learned both vanilla Javascript and ReactJS through the _nology bootcamp, which allowed me to work on a range of projects and get some real experience. I've primarily stuck to functional programming in JS, but have dabbled a bit in OOP in JS ever since finding a bit of an affinity for it in Java.",
		"Javascript is my preferred language at the moment, and I polish my skills pretty regularly on Codewars.",
	],
	points: [
		"Trained in ES12",
		"Proficient with ReactJS library (That's what this site was built in!)",
		"Primarily trained in functional programming, keen to try more OOP in JS",
		"Trained in TDD using Jest",
	],
	projects: [projectMorseCode, projectGoogleBooks, projectCommerceSite],
	icons: [faJsSquare, faReact],
};

const skillThree = {
	title: "Java",
	id: "item3",
	content: [
		"When I first started learning Java, I was intimidated. Coming from Javascript, being such a loosely typed language, Java looked so much more complicated and time consuming! Nowadays having a little more experience from project work, I see the perks and feel much more comfortable with Java.",
		"The projects presented below show a large range of skill level, from where I first started to a much more recent project which I'm quite proud of.",
	],
	points: [
		"Trained in Java 18",
		"Proficient with OOP concepts",
		"Working knowledge of Spring Boot for creation of RESTful APIs",
		"Trained in TDD using JUnit",
	],
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
	content: [
		"Learning git using the CLI was the first thing that really freaked me out. Introduced to me at the start of the _nology bootcamp, it felt completely alien, and I was largely just using what I knew were the right commands without much of an understanding of what they did.",
		"Nowadays I have taken some time to learn a bit more about what's going on under the hood, and use git much more comfortably on each of my projects for good practice.",
		"You can find a link to my Github in my about section!",
	],
	points: [
		"Trained in Git Bash CLI",
		"Working knowledge of branches, commits, pull requests, etc.",
	],
	projects: [],
	icons: [faGit],
};

const skillFive = {
	title: "TDD (Jest / JUnit)",
	id: "item5",
	content: [
		"The _nology bootcamp really makes sure to stress the importance of TDD, and I really appreciated that fact, hearing how prominent it is in a lot of professional environments. The biggest way I've personally implemented it was in the below project where I used dynamic testing to ensure the correct operation of a number of functions.",
	],
	points: ["Trained in Jest for Javascript", "Trained in JUnit for Java"],
	projects: [projectPokerHandSolver],
	icons: [faFileSignature],
};

const skillSix = {
	title: "Google Firestore",
	id: "item7",
	content: [
		"Using Google Firestore was my first experience at creating my own database and manipulating the stored data.",
		`Being able to see what was happening "behind the scenes" of an API call for the first time was fascinating, even if I did accidentally create an infinite loop of read requests that caused me to go over my daily quota!`,
		"I can happily say that hasn't happened again since.",
	],
	points: [
		"Working knowledge of creating and using existing Cloud Firestore databases",
		"Working knowledge of the Cloud Firestore REST API",
	],
	projects: [projectCommerceSite],
	icons: [faFireAlt],
};

const skillSeven = {
	title: "SQL (MySQL)",
	id: "item6",
	content: [
		"After learning JS and Java, learning a simpler language like SQL felt like a breeze!",
		"Working primarily with the MySQL workbench environment, I have experience both setting up and using existing databases.",
		"Putting together the pieces of creating a front-end in JS, an API in Java, and a DB in MySQL was one of the most gratifying experiences during the _nology bootcamp, and was the point where I started feeling like a proper developer.",
	],
	points: [
		"Working knowledge of the MySQL Workbench environment",
		"Working knowledge of accessing an SQL DB with a RESTful API",
		"Proficient in SQL queries with Spring Boot",
	],
	projects: [],
	icons: [faDatabase],
};

// const skillEight = {
// 	title: "Misc.",
// 	id: "item8",
// 	content: ["blah blah blah"],
// 	points: [],
// 	projects: [],
// 	icons: [faQuestion],
// };

export const skillsList = [
	skillOne,
	skillTwo,
	skillThree,
	skillFour,
	skillFive,
	skillSix,
	skillSeven,
	// skillEight,
];
