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
	const { activePage, showPage, setShowPage, windowIsHorizontal } =
		useContext(StateContext);

	const windowClass = windowIsHorizontal
		? styles.DisplayWindow
		: styles.DisplayWindow__Vertical;

	const getPage = () => {
		switch (activePage) {
			case "Home":
				return <Home />;
			case "Skills":
				return (
					<CardWrapper
						title="My Skills"
						listItems={skillsList}
						selectable={true}
						content={skillsList}
						size="large"
						linkBox={false}
					/>
				);
			case "About Me":
				return (
					<CardWrapper
						title="My Links"
						listItems={aboutList}
						selectable={false}
						content={aboutList}
						size="small"
						linkBox={true}
					/>
				);
			default:
				return <Home />;
		}
	};

	const doShowPage = async () => {
		if (showPage === false) {
			await wait(500);
			setShowPage(true);
		}
	};

	useEffect(() => {
		doShowPage();
	}, []);

	return (
		<div className={windowClass}>
			{getPage()}
			<Modal />
		</div>
	);
};

export default DisplayWindow;
