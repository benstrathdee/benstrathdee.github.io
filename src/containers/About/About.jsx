import React, { useContext } from "react";
import styles from "./About.module.scss";
import { StateContext } from "../../context/StateContext/StateContext";
import { aboutList } from "../../content/AboutContent";
import AboutListItem from "../../components/AboutListItem/AboutListItem";
import AboutCard from "../../components/AboutCard/AboutCard";
import CardTitle from "../CardTitle/CardTitle";

const About = () => {
    const { show } = useContext(StateContext);
    const aboutClass = show ? styles.About : styles.About__Invis;
    return (
        <div className={aboutClass}>
            <div className={styles.Card}>
                <CardTitle title="My Links" />
                <ul className={styles.Card_List}>
                    {aboutList.map((link, index) => {
                        return <AboutListItem link={link} key={index} />;
                    })}
                </ul>
                <div className={styles.Card_Info}>
                    <AboutCard />
                </div>
            </div>
        </div>
    );
};

export default About;
