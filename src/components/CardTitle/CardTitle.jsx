import React, { useContext } from "react";
import styles from "./CardTitle.module.scss";
import { StateContext } from "../../context/StateContext/StateContext";

const CardTitle = ({ title, size }) => {
	const { windowIsHorizontal } = useContext(StateContext);
	return size !== "large" || !windowIsHorizontal ? null : (
		<card-title class={styles.Title}>{title}</card-title>
	);
};

export default CardTitle;
