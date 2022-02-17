import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./Home.module.scss";

const Home = () => {
	const { showPage } = useContext(StateContext);
	const homeClass = showPage ? styles.Home : styles.Home__Invis;

	return (
		<div className={homeClass}>
			<h1 className={styles.Home_Title}>BEN STRATHDEE</h1>
			<h2 className={styles.Home_Subtitle}>Junior Software Developer</h2>
		</div>
	);
};

export default Home;
