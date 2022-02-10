import React from "react";
import styles from "./CardListSkills.module.scss";
import SkillsListItem from "../../components/SkillsListItem/SkillsListItem";
import { skillsList } from "../../content/SkillsContent";

const CardListSkills = ({ selectable, activeItem }) => {
    if (selectable) {
        // code for setting activeItem onClick, if not selectable
        // onClick should do something else/do nothing
    }

    return (
        <div className={styles.CardListSkills}>
            {skillsList.map((skill, index) => {
                return (
                    <SkillsListItem
                        skill={skill}
                        key={index}
                        index={index + 1}
                        selectable={true}
                    />
                );
            })}
        </div>
    );
};

export default CardListSkills;
