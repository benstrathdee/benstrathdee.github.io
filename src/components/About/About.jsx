import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./About.module.scss";

const About = () => {
	const { show } = useContext(StateContext);
	const aboutClass = show ? styles.About : styles.About__Invis;
	return (
		<div className={aboutClass}>
			<p>sdfusidfiausdfaphdfausdfpadsfasdfasdf</p>
		</div>
	);
};

export default About;
