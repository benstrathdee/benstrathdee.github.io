import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const linkOne = {
	title: "GitHub",
	address: "https://github.com/benstrathdee",
	icon: faGithub,
};

const linkTwo = {
	title: "LinkedIn",
	address: "https://www.linkedin.com/in/ben-strathdee-25b29b226/",
	icon: faLinkedin,
};

const linkThree = {
	title: "Email",
	address: "mailto:ben.strathdee@live.com.au",
	icon: faEnvelopeSquare,
};

export const aboutList = [linkOne, linkTwo, linkThree];
