import React from "react";
import styles from "./CardTitle.module.scss";

const CardTitle = ({ title }) => {
	return (
		<div className={styles.CardTitle}>
			<h3 className={styles.CardTitle_Title}>{title}</h3>
		</div>
	);
};

export default CardTitle;
