import React, { useContext } from "react";
import ProjectsBox from "../../containers/ProjectsBox/ProjectsBox";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./SkillCard.module.scss";

const SkillCard = () => {
	const { activeSkill, showSkill } = useContext(StateContext);
	const skillCardClass = showSkill
		? styles.SkillCard
		: styles.SkillCard__Invis;

	return (
		<div className={skillCardClass}>
			<h3>{activeSkill.title}</h3>
			<div className={styles.SkillCard_ContentBox}>
				{activeSkill.content.map((item, index) => {
					return <p key={index}>{item}</p>;
				})}
			</div>
			{activeSkill.projects.length > 0 && (
				<div className={styles.SkillCard_ProjectsBox}>
					<hr className={styles.HorizontalRule} />
					<h3>Related Projects</h3>
					<ProjectsBox />
				</div>
			)}
		</div>
	);
};

export default SkillCard;
