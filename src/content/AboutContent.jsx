import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelopeSquare,
	faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export const linkOne = {
	title: "About Me",
	id: "item1",
	content: [
		`I'm a born problem-solver who loves taking every opportunity to
	improve myself and my environment. I've always been passionate
	about technology, and taught myself some coding skills to solve
	some administrative problems in a previous job. Now thanks to a
	12 week coding boot camp with _nology.io, I'm using the passion
	I discovered to forge a career in software development.`,
		`I particularly enjoy using ReactJS, and I'm enjoying Java more
	and more every day.`,
		`Outside of work, you'll probably find me spending time with my
	partner and our pets (Amelia, Sebastian, and Elizabeth), playing
	something on the Nintendo Switch, or polishing my coding skills
	on Codewars (4 kyu so far!)`,
		"",
		"",
		`For a better overview of some of my projects, check out my GitHub!`,
		`Interested in contacting me about some work, or seeing what I'm
	up to? Check me out on LinkedIn, or send me an email!`,
	],
	projects: [],
	icons: [faQuestion],
};

const linkTwo = {
	title: "GitHub",
	id: "item2",
	content: [],
	address: "https://github.com/benstrathdee",
	projects: [],
	icons: [faGithub],
};

const linkThree = {
	title: "LinkedIn",
	id: "item3",
	content: [],
	address: "https://www.linkedin.com/in/ben-strathdee-25b29b226/",
	projects: [],
	icons: [faLinkedin],
};

const linkFour = {
	title: "Email",
	id: "item4",
	content: [],
	address: "mailto:ben.strathdee@live.com.au",
	projects: [],
	icons: [faEnvelopeSquare],
};

export const aboutList = [linkOne, linkTwo, linkThree, linkFour];
