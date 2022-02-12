import styles from "./ProjectsBox.module.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectsBox = ({ item }) => {
	return (
		<div className={styles.ProjectsBox}>
			{item.projects.map((project, index) => {
				return <ProjectCard key={index} project={project} />;
			})}
		</div>
	);
};

export default ProjectsBox;
