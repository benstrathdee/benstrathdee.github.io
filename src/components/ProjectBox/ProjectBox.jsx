import styles from "./ProjectBox.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectBox = ({ parent }) => {
	return (
		<project-box class={styles.Box}>
			<hr className={styles.Box_Break} />
			<h3 className={styles.Box_Title}>Related Projects</h3>
			<span className={styles.Box_Projects}>
				{parent.projects.map((project, index) => {
					return <ProjectCard key={index} project={project} />;
				})}
			</span>
		</project-box>
	);
};

export default ProjectBox;
