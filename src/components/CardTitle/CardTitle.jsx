import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./CardTitle.module.scss";

const CardTitle = ({ title, size }) => {
	const { windowIsHorizontal } = useContext(StateContext);
	return size !== "large" || !windowIsHorizontal ? null : (
		<div className={styles.CardTitle}>
			<h3 className={styles.CardTitle_Title}>{title}</h3>
		</div>
	);
};

export default CardTitle;
