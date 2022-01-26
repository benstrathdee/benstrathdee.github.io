import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./Skills.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3,
	faSass,
	faJsSquare,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faFireAlt, faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
	const { show } = useContext(StateContext);
	const skillsClass = show ? styles.Skills : styles.Skills__Invis;

	return (
		<div className={skillsClass}>
			<div className={styles.Card}>
				<div className={styles.Card_Title}>
					<h3>My Skills</h3>
				</div>
				<div className={styles.Card_List}>
					<ul>
						<li>
							<FontAwesomeIcon icon={faHtml5} />
							<FontAwesomeIcon icon={faCss3} />
							<FontAwesomeIcon icon={faSass} /> HTML/CSS/SASS
						</li>
						<li>
							<FontAwesomeIcon icon={faJsSquare} />
							<FontAwesomeIcon icon={faReact} /> JavaScript/React
						</li>
						<li>
							<FontAwesomeIcon icon={faDatabase} /> SQL(MySQL)
						</li>
						<li>
							<FontAwesomeIcon icon={faFireAlt} /> Google
							Firestore
						</li>
					</ul>
				</div>
				<div className={styles.Card_Info}></div>
			</div>
		</div>
	);
};

export default Skills;
