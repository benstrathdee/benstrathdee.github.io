import { useContext } from "react";
import styles from "./ProjectCard.module.scss";
import { StateContext } from "../../context/StateContext/StateContext";

const ProjectCard = ({ project }) => {
	const { setShowModal, setModalContent } = useContext(StateContext);

	const handleModal = () => {
		setModalContent(project);
		setShowModal(true);
	};

	return (
		<project-card class={styles.Project} onClick={handleModal}>
			<img
				src={project.projectImage}
				alt="Relevant project"
				className={styles.Project_Image}
			/>
			<h5 className={styles.Project_Content}>{project.name}</h5>
		</project-card>
	);
};

export default ProjectCard;
