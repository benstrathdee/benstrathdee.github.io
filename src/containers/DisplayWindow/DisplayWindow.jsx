import React, { useContext } from "react";
import styles from "./DisplayWindow.module.scss";
import Home from "./../../components/Home/Home";
import Skills from "./../../components/Skills/Skills";
import About from "./../../components/About/About";
import { StateContext } from "../../context/StateContext/StateContext";
import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react/cjs/react.development";
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
