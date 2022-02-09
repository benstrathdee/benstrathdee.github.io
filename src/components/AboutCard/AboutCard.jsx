import React from "react";
import styles from "./AboutCard.module.scss";

const AboutCard = () => {
	return (
		<div className={styles.AboutCard}>
			<h3 className={styles.AboutCard_Title}>About Me</h3>
			<p>
				I'm a born problem-solver who loves taking every opportunity to
				improve myself and my environment. I've always been passionate
				about technology, and taught myself some coding skills to solve
				some administrative problems in a previous job. Now thanks to a
				12 week coding boot camp with _nology.io, I'm using the passion
				I discovered to forge a career in software development.
			</p>
			<p>
				I particularly enjoy using ReactJS, and I'm enjoying Java more
				and more every day.
			</p>
			<p>
				Outside of work, you'll probably find me spending time with my
				partner and our pets (Amelia, Sebastian, and Elizabeth), playing
				something on the Nintendo Switch, or polishing my coding skills
				on Codewars (4 kyu so far!)
			</p>
			<hr className={styles.AboutCard_HorizontalRule} />
			<p>
				For a better overview of some of my projects, check out the link
				to my GitHub on the left!
			</p>
			<p>
				Interested in contacting me about some work, or seeing what I'm
				up to? Check me out on LinkedIn, or send me an email!
			</p>
		</div>
	);
};

export default AboutCard;
