import React, { useContext } from "react";
import styles from "./DisplayWindow.module.scss";
import Home from "./../Home";
import Skills from "./../Skills";
import About from "./../About";
import { StateContext } from "../../context/StateContext/StateContext";
import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";
import Modal from "../../components/Modal/Modal";

const DisplayWindow = () => {
	const { page, setShow, show } = useContext(StateContext);
	const getElement = () => {
		switch (page) {
			case "Home":
				return <Home />;
			case "Skills / Projects":
				return <Skills />;
			case "About / Contact":
				return <About />;
			default:
				return <Home />;
		}
	};

	const firstLoad = async () => {
		if (show === false) {
			await wait(500);
			setShow(true);
		}
	};

	useEffect(() => {
		firstLoad();
	});

	return (
		<div className={styles.DisplayWindow}>
			{getElement()}
			<Modal />
		</div>
	);
};

export default DisplayWindow;
