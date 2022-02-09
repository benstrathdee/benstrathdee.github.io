import styles from "./ProjectsBox.module.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";

const ProjectsBox = () => {
	const { activeSkill } = useContext(StateContext);

	return (
		<div className={styles.ProjectsBox}>
			{activeSkill.projects.map((project, index) => {
				return (
					<ProjectCard key={index} project={project} index={index} />
				);
			})}
		</div>
	);
};

export default ProjectsBox;
