import React from "react";
import { wait } from "@testing-library/user-event/dist/utils";
import { useContext } from "react";
import styles from "./SkillsListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StateContext } from "../../context/StateContext/StateContext";

const SkillsListItem = ({ skill, index }) => {
	const { activeSkill, setActiveSkill, setShowSkill } =
		useContext(StateContext);

	const handleSkill = async (skill) => {
		if (activeSkill !== skill) {
			if (activeSkill.title !== "") {
				document.getElementById(
					"item" + (activeSkill.number - 1)
				).className = styles.ItemWrapper_Item;
			}
			setShowSkill(false);
			await wait(300);
			setActiveSkill(skill);
			document.getElementById("item" + (skill.number - 1)).className =
				styles.ItemWrapper_Item__Current;
			await wait(300);
			setShowSkill(true);
		}
	};

	return (
		<div className={styles.ItemWrapper}>
			<li
				id={"item" + index}
				className={styles.ItemWrapper_Item}
				onClick={() => handleSkill(skill)}
			>
				<div className={styles.ItemWrapper_Icons}>
					{skill.icons.map((icon, iconIndex) => {
						return <FontAwesomeIcon icon={icon} key={iconIndex} />;
					})}
				</div>
				<div className={styles.ItemWrapper_Title}>{skill.title}</div>
			</li>
		</div>
	);
};

export default SkillsListItem;
