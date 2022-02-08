import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./Modal.module.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { wait } from "@testing-library/user-event/dist/utils";

const Modal = () => {
	const { showModal, setShowModal, modalContent } = useContext(StateContext);
	const [show, setShow] = useState(false);

	const modalClass = show ? styles.Modal : styles.Modal__Invis;

	useEffect(() => {
		const close = async (e) => {
			if (e.key === "Escape") {
				closeModal();
			}
		};
		window.addEventListener("keydown", close);
	});

	useEffect(() => {
		if (showModal) {
			openModal();
		}
	}, [showModal]);

	const openModal = () => {
		setShow(true);
	};

	const closeModal = async () => {
		setShow(false);
		await wait(300);
		setShowModal(false);
	};

	return !showModal ? null : (
		<div className={modalClass} onClick={closeModal}>
			<div
				className={styles.Modal_Content}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={styles.Modal_Header}>
					<button
						className={styles.Modal_Button}
						onClick={closeModal}
					>
						✖
					</button>
				</div>
				<div className={styles.Modal_ImageWrapper}>
					<img
						src={modalContent.projectImage}
						alt=""
						className={styles.Modal_Image}
					/>
				</div>
				<div className={styles.Modal_Body}>
					<h4>{modalContent.name}</h4>
					<p>{modalContent.description}</p>
					<a
						href={modalContent.link}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faGithub}
							className={styles.Modal_LinkIcon}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Modal;
