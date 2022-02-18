import { useContext, useEffect } from "react";
import { wait } from "@testing-library/user-event/dist/utils";
import styles from "./ContentBody.module.scss";
import Home from "../Home";
import ContentCard from "../ContentCard";
import Modal from "../Modal/Modal";
import { skillsList } from "../../content/SkillsContent";
import { aboutList } from "../../content/AboutContent";
import { StateContext } from "../../context/StateContext/StateContext";

const ContentBody = () => {
	const { activePage, showPage, setShowPage, windowIsHorizontal } =
		useContext(StateContext);

	const windowClass = windowIsHorizontal
		? styles.ContentBody
		: styles.ContentBody__Vertical;

	const getPage = () => {
		switch (activePage) {
			case "Home":
				return <Home />;
			case "Skills":
				return (
					<ContentCard
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
					<ContentCard
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
		<content-body class={windowClass}>
			{getPage()}
			<Modal />
		</content-body>
	);
};

export default ContentBody;
