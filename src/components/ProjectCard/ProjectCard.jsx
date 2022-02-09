import { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
	const { setShowModal, setModalContent } = useContext(StateContext);

	const handleModal = () => {
		setModalContent(project);
		setShowModal(true);
	};

	return (
		<div className={styles.ProjectCard}>
			<div className={styles.ImageWrapper}>
				<img
					src={project.projectImage}
					alt="Relevant project"
					className={styles.ImageWrapper_Image}
				/>
			</div>
			<div className={styles.InfoWrapper} onClick={handleModal}>
				<h5 className={styles.InfoWrapper_Content}>{project.name}</h5>
			</div>
		</div>
	);
};

export default ProjectCard;
