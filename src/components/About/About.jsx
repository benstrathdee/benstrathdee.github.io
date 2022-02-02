import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const About = () => {
	const { show } = useContext(StateContext);
	const aboutClass = show ? styles.About : styles.About__Invis;
	return (
		<div className={aboutClass}>
			<div className={styles.Card}>
				<div className={styles.Card_Title}>
					<h3>My Links</h3>
				</div>
				<ul className={styles.LinksList}>
					<a
						href="https://github.com/benstrathdee"
						target="_blank"
						rel="noreferrer"
						className={styles.Link}
					>
						<li className={styles.LinksList_Item}>
							<div>
								<FontAwesomeIcon icon={faGithub} />
							</div>
							<div>GitHub</div>
						</li>
					</a>
					<a
						href="https://www.linkedin.com/in/ben-strathdee-25b29b226/"
						target="_blank"
						rel="noreferrer"
						className={styles.Link}
					>
						<li className={styles.LinksList_Item}>
							<div>
								<FontAwesomeIcon icon={faLinkedin} />
							</div>
							<div>LinkedIn</div>
						</li>
					</a>
					<a
						href="mailto:ben.strathdee@live.com.au"
						target="_blank"
						rel="noreferrer"
						className={styles.Link}
					>
						<li className={styles.LinksList_Item}>
							<div>
								<FontAwesomeIcon icon={faEnvelopeSquare} />
							</div>
							<div>Email</div>
						</li>
					</a>
				</ul>
				<div className={styles.Card_Info}>
					<h3>About Me</h3>
					<p>
						I'm a born problem-solver who loves taking every
						opportunity to improve myself and my environment. I've
						always been passionate about technology, and taught
						myself some coding skills to solve some administrative
						problems in a previous job. Now thanks to a 12 week
						coding boot camp with _nology.io, I'm using the passion
						I discovered to forge a career in software development.
					</p>
					<p>
						I particularly enjoy using ReactJS, and I'm enjoying
						Java more and more every day.
					</p>
					<p>
						Outside of work, you'll probably find me spending time
						with my partner and our pets (Amelia, Sebastian, and
						Elizabeth), playing something on the Nintendo Switch, or
						polishing my coding skills on Codewars (4 kyu so far!)
					</p>
					<hr className={styles.HorizontalRule} />
					<p>
						For a better overview of some of my projects, check out
						the link to my GitHub on the left!
					</p>
					<p>
						Interested in contacting me about some work, or seeing
						what I'm up to? Check me out on LinkedIn, or send me an
						email!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
