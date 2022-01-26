import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./Projects.module.scss";

const Projects = () => {
	const { show } = useContext(StateContext);
	const projectsClass = show ? styles.Projects : styles.Projects__Invis;
	return (
		<div className={projectsClass}>
			<p>sdfusidfiausdfaphdfausdfpadsfasdfasdf</p>
		</div>
	);
};

export default Projects;
