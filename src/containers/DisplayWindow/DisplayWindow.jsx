import React, { useContext } from "react";
import styles from "./DisplayWindow.module.scss";
import Home from "./../../components/Home/Home";
import Skills from "./../../components/Skills/Skills";
import Projects from "./../../components/Projects/Projects";
import About from "./../../components/About/About";
import Contact from "./../../components/Contact/Contact";
import { StateContext } from "../../context/StateContext/StateContext";
import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react/cjs/react.development";

const DisplayWindow = () => {
	const { page, setShow, show } = useContext(StateContext);
	const getElement = () => {
		switch (page) {
			case "Home":
				return <Home />;
			case "Skills":
				return <Skills />;
			case "Projects":
				return <Projects />;
			case "About":
				return <About />;
			case "Contact":
				return <Contact />;
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

	return <div className={styles.DisplayWindow}>{getElement()}</div>;
};

export default DisplayWindow;
