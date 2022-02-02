import React, { useContext } from "react";
import ProjectsCarousel from "../../containers/ProjectsCarousel/ProjectsCarousel";
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
				{activeSkill.content}
			</div>
			{activeSkill.projects.length > 0 && (
				<div className={styles.SkillCard_ProjectsBox}>
					<hr className={styles.HorizontalRule} />
					<h3>Related Projects</h3>
					<ProjectsCarousel />
				</div>
			)}
		</div>
	);
};

export default SkillCard;
