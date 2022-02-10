import { wait } from "@testing-library/user-event/dist/utils";
import React, { useContext, useEffect } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./Skills.module.scss";
import SkillCard from "../../components/SkillCard/SkillCard";
import { skillsList } from "../../content/SkillsContent";
import CardListSkills from "../CardListSkills/CardListSkills";
import CardTitle from "../CardTitle/CardTitle";

const Skills = () => {
    const { show, showSkill, setShowSkill, setActiveSkill } =
        useContext(StateContext);

    const skillsClass = show ? styles.Skills : styles.Skills__Invis;

    const firstLoad = async () => {
        if (showSkill === false) {
            await wait(300);
            setShowSkill(true);
        }
    };

    useEffect(() => {
        firstLoad();
        if (skillsList.length !== 0) {
            setActiveSkill(skillsList[0]);
        }
    }, [setActiveSkill]);

    return (
        <div className={skillsClass}>
            <div className={styles.Card}>
                <CardTitle title="My Skills" />
                <CardListSkills listItems={skillsList} />
                <div className={styles.Card_Info}>
                    <SkillCard />
                </div>
            </div>
        </div>
    );
};

export default Skills;
