import { useContext, useEffect, useState } from "react";
import { wait } from "@testing-library/user-event/dist/utils";
import styles from "./Modal.module.scss";
import { StateContext } from "../../context/StateContext/StateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Modal = () => {
	const { showModal, setShowModal, modalContent } = useContext(StateContext);
	const [modalVisible, setModalVisible] = useState(false);

	const modalClass = modalVisible ? styles.Wrapper : styles.Wrapper__Invis;

	const close = async (e) => {
		if (e.key === "Escape") closeModal();
	};

	window.addEventListener("keydown", close);

	const openModal = () => {
		setModalVisible(true);
	};

	const closeModal = async () => {
		setModalVisible(false);
		await wait(300);
		setShowModal(false);
	};

	useEffect(() => {
		if (showModal) openModal();
	}, [showModal]);

	return !showModal ? null : (
		<modal-wrapper class={modalClass} onClick={closeModal}>
			<modal-box
				class={styles.Modal_Content}
				onClick={(e) => e.stopPropagation()}
			>
				<modal-header class={styles.Modal_Header}>
					<a
						href={modalContent.link}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faGithub}
							className={styles.Modal_Link}
						/>
					</a>
					<h4 className={styles.Modal_Title}>{modalContent.name}</h4>
					<button className={styles.Modal_Close} onClick={closeModal}>
						✖
					</button>
				</modal-header>
				<img
					src={modalContent.projectImage}
					alt="Project Preview"
					className={styles.Modal_Image}
				/>
				<p>{modalContent.description}</p>
			</modal-box>
		</modal-wrapper>
	);
};

export default Modal;
