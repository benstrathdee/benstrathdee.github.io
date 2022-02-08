import { wait } from "@testing-library/user-event/dist/utils";
import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./Skills.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillCard from "../SkillCard/SkillCard";
import { skillsList } from "./../../content/SkillsContent/SkillsContent";
import { useEffect } from "react";

const Skills = () => {
	const { show, activeSkill, setActiveSkill, showSkill, setShowSkill } =
		useContext(StateContext);

	const skillsClass = show ? styles.Skills : styles.Skills__Invis;

	const handleSkill = async (skill) => {
		if (activeSkill !== skill) {
			document.getElementById(
				"item" + (activeSkill.number - 1)
			).className = styles.SkillsList_Item;
			setShowSkill(false);
			await wait(300);
			setActiveSkill(skill);
			document.getElementById("item" + (skill.number - 1)).className =
				styles.SkillsList_Item__Current;
			await wait(300);
			setShowSkill(true);
		}
	};

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
				<ul className={styles.SkillsList}>
					{skillsList.map((skill, index) => {
						return (
							<div className={styles.ItemWrapper} key={index}>
								<li
									id={"item" + index}
									className={styles.SkillsList_Item}
									onClick={() => handleSkill(skill)}
								>
									<div>
										{skill.icons.map((icon, iconIndex) => {
											return (
												<FontAwesomeIcon
													icon={icon}
													key={iconIndex}
												/>
											);
										})}
									</div>
									<div>{skill.title}</div>
								</li>
							</div>
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
