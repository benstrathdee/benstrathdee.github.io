import { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./Modal.module.scss";

const Modal = () => {
	const { showModal, setShowModal, modalContent } = useContext(StateContext);

	if (!showModal) {
		return null;
	}
	return (
		<div className={styles.Modal} onClick={() => setShowModal(false)}>
			<div
				className={styles.Modal_Content}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={styles.Modal_Header}>
					<button onClick={() => setShowModal(false)}>✖</button>
				</div>
				<div className={styles.Modal_ThumbWrapper}>
					<img
						src={modalContent.projectImage}
						alt=""
						className={styles.Modal_Thumb}
					/>
				</div>
				<div className={styles.Modal_Body}>
					{modalContent.description}
				</div>
			</div>
		</div>
	);
};

export default Modal;
