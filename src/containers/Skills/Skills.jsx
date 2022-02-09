import { wait } from "@testing-library/user-event/dist/utils";
import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./Skills.module.scss";
import SkillsListItem from "../../components/SkillsListItem/SkillsListItem";
import SkillCard from "../../components/SkillCard/SkillCard";
import { skillsList } from "../../content/SkillsContent";
import { useEffect } from "react";

const Skills = () => {
	const { show, showSkill, setShowSkill } = useContext(StateContext);

	const skillsClass = show ? styles.Skills : styles.Skills__Invis;

	const firstLoad = async () => {
		if (showSkill === false) {
			await wait(300);
			setShowSkill(true);
		}
	};

	useEffect(() => {
		firstLoad();
	});

	return (
		<div className={skillsClass}>
			<div className={styles.Card}>
				<div className={styles.Card_Title}>
					<h3>My Skills</h3>
				</div>
				<ul className={styles.Card_List}>
					{skillsList.map((skill, index) => {
						return (
							<SkillsListItem
								skill={skill}
								key={index}
								index={index}
							/>
						);
					})}
				</ul>
				<div className={styles.Card_Info}>
					<SkillCard />
				</div>
			</div>
		</div>
	);
};

export default Skills;
