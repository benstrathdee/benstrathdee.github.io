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

export const skillOne = {
	title: "HTML / CSS / SASS",
	content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla nunc sed risus feugiat, non cursus nunc sagittis. Donec vestibulum porta elit, non commodo felis scelerisque vel. Suspendisse in quam vel augue tincidunt suscipit pulvinar vitae lacus. Ut molestie, justo in egestas commodo, leo urna dapibus ante, vitae interdum libero massa dignissim ante. Nullam iaculis id neque non ultrices. Aenean id aliquam velit. Etiam laoreet orci ac quam sodales tincidunt at non mi. Proin sapien mauris, posuere ac efficitur eu, dapibus eu quam`,
	projects: [
		{
			name: "project1",
			description: "12/12/12",
			projectImage: "https://www.placecage.com/200/200",
			link: "",
		},
	],
	icons: [faHtml5, faCss3, faSass],
};
export const skillTwo = {
	title: "JavaScript / ReactJS",
	content: "blah blah blah",
	projects: [],
	icons: [faJsSquare, faReact],
};
export const skillThree = {
	title: "Java",
	content: "blah blah blah",
	projects: [],
	icons: [faJava],
};
export const skillFour = {
	title: "Git (Git Bash)",
	content: "blah blah blah",
	projects: [],
	icons: [faGit],
};
export const skillFive = {
	title: "TDD (Jest / JUnit)",
	content: "blah blah blah",
	projects: [],
	icons: [faFileSignature],
};
export const skillSix = {
	title: "SQL (MySQL)",
	content: "blah blah blah",
	projects: [],
	icons: [faDatabase],
};
export const skillSeven = {
	title: "Google Firestore",
	content: "blah blah blah",
	projects: [],
	icons: [faFireAlt],
};
export const skillEight = {
	title: "Misc.",
	content: "blah blah blah",
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
