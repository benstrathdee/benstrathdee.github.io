import React, { useContext, useEffect } from "react";
import styles from "./CardContent.module.scss";
import { StateContext } from "../../context/StateContext/StateContext";
import ProjectsBox from "../ProjectsBox";

const CardContent = ({ content }) => {
	const { showContent, setShowContent, activeItem } =
		useContext(StateContext);

	const contentClass = showContent
		? styles.ContentCard
		: styles.ContentCard__Invis;

	const item = content.filter((item) => item.id === activeItem)[0];

	useEffect(() => {
		setShowContent(true);
	}, [setShowContent]);

	return (
		<div className={styles.ContentWrapper}>
			<div className={contentClass}>
				<h3 className={styles.ContentCard_Title}>{item.title}</h3>
				<div className={styles.ContentCard_ContentBox}>
					{item.content.map((text, index) => {
						return <p key={index}>{text}</p>;
					})}
				</div>
				{item.projects.length > 0 && (
					<div className={styles.ContentCard_ProjectsBox}>
						<hr className={styles.ContentCard_HorizontalRule} />
						<h3 className={styles.ContentCard_Title}>
							Related Projects
						</h3>
						<ProjectsBox item={item} />
					</div>
				)}
			</div>
		</div>
	);
};

export default CardContent;
