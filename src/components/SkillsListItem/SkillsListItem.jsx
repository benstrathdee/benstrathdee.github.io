import React, { useEffect } from "react";
import { wait } from "@testing-library/user-event/dist/utils";
import { useContext } from "react";
import styles from "./SkillsListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StateContext } from "../../context/StateContext/StateContext";

const SkillsListItem = ({ skill }) => {
    const { activeSkill, setActiveSkill, setShowSkill } =
        useContext(StateContext);

    const handleSkill = async (skill) => {
        if (activeSkill !== skill) {
            document.getElementById(activeSkill.id).className =
                styles.ItemWrapper_Item;
            setShowSkill(false);
            await wait(300);
            setActiveSkill(skill);
            document.getElementById(skill.id).className =
                styles.ItemWrapper_Item__Current;
            await wait(300);
            setShowSkill(true);
        }
    };

    useEffect(() => {
        document.getElementById("item1").className =
            styles.ItemWrapper_Item__Current;
    }, []);

    return (
        <div className={styles.ItemWrapper}>
            <li
                id={skill.id}
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
