import { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ project }) => {
	const { showModal, setShowModal, setModalContent } =
		useContext(StateContext);

	const handleModal = () => {
		setModalContent(project);
		setShowModal(!showModal);
	};

	return (
		<div className={styles.CarouselCard}>
			<div className={styles.ImageWrapper}>
				<img
					src={project.projectImage}
					alt=""
					className={styles.ImageWrapper_Image}
				/>
			</div>
			<div className={styles.InfoWrapper} onClick={handleModal}>
				<h5 className={styles.InfoWrapper_Content}>{project.name}</h5>
			</div>
		</div>
	);
};

export default CarouselCard;
