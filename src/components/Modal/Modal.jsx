import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./Modal.module.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { wait } from "@testing-library/user-event/dist/utils";

const Modal = () => {
	const { showModal, setShowModal, modalContent } = useContext(StateContext);
	const [visible, setVisible] = useState(false);

	const modalClass = visible ? styles.Modal : styles.Modal__Invis;

	const close = async (e) => {
		if (e.key === "Escape") {
			closeModal();
		}
	};

	window.addEventListener("keydown", close);

	useEffect(() => {
		if (showModal) {
			openModal();
		}
	}, [showModal]);

	const openModal = () => {
		setVisible(true);
	};

	const closeModal = async () => {
		setVisible(false);
		await wait(300);
		setShowModal(false);
	};

	return !showModal ? null : (
		<div className={modalClass} onClick={closeModal}>
			<div
				className={styles.Modal_Content}
				onClick={(e) => e.stopPropagation()}
			>
				<h4 className={styles.Modal_Title}>{modalContent.name}</h4>
				<img
					src={modalContent.projectImage}
					alt="Project Preview"
					className={styles.Modal_Image}
				/>
				<p>{modalContent.description}</p>
				<a href={modalContent.link} target="_blank" rel="noreferrer">
					<FontAwesomeIcon
						icon={faGithub}
						className={styles.Modal_LinkIcon}
					/>
				</a>
			</div>
		</div>
	);
};

export default Modal;
