import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";
import styles from "./DisplayWindow.module.scss";
import Home from "../Home";
import CardWrapper from "../CardWrapper";
import Modal from "../Modal/Modal";
import { skillsList } from "../../content/SkillsContent";
import { aboutList } from "../../content/AboutContent";

const DisplayWindow = () => {
	const { page, setShow, show } = useContext(StateContext);

	const getElement = () => {
		switch (page) {
			case "Home":
				return <Home />;
			case "Skills / Projects":
				return (
					<CardWrapper
						title="My Skills"
						listItems={skillsList}
						selectable={true}
						content={skillsList}
						size="large"
					/>
				);
			case "About / Contact":
				return (
					<CardWrapper
						title="My Links"
						listItems={aboutList}
						selectable={false}
						content={aboutList}
						size="medium"
					/>
				);
			default:
				return <Home />;
		}
	};

	const showPage = async () => {
		if (show === false) {
			await wait(500);
			setShow(true);
		}
	};

	useEffect(() => {
		showPage();
	}, []);

	return (
		<div className={styles.DisplayWindow}>
			{getElement()}
			<Modal />
		</div>
	);
};

export default DisplayWindow;
