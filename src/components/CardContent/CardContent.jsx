import React, { useContext, useEffect } from "react";
import styles from "./CardContent.module.scss";
import { StateContext } from "../../context/StateContext/StateContext";
import ProjectsBox from "../ProjectsBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardContent = ({ content, linkBox }) => {
	const { showContent, setShowContent, activeContent, windowIsHorizontal } =
		useContext(StateContext);

	const getContentClass = () => {
		if (windowIsHorizontal) {
			return showContent ? styles.ContentCard : styles.ContentCard__Invis;
		}
		return showContent
			? styles.ContentCardVertical
			: styles.ContentCardVertical__Invis;
	};

	const activeItem = content.filter((item) => item.id === activeContent)[0];

	useEffect(() => {
		setShowContent(true);
	}, [setShowContent]);

	return windowIsHorizontal ? (
		<div className={getContentClass()}>
			<h3 className={styles.ContentCard_Title}>{activeItem.title}</h3>
			<hr className={styles.ContentCard_HorizontalRule} />
			{activeItem.content.map((text, index) => {
				return (
					<p className={styles.ContentCard_Content} key={index}>
						{text}
					</p>
				);
			})}
			{activeItem.projects.length > 0 && (
				<>
					<hr className={styles.ContentCard_HorizontalRule} />
					<h3 className={styles.ContentCard_Title}>
						Related Projects
					</h3>
					<ProjectsBox parent={activeItem} />
				</>
			)}
		</div>
	) : (
		<>
			<div className={styles.VerticalSpacer}></div>
			{content.map((item, index) => {
				return (
					item.content.length > 0 && (
						<div className={getContentClass()} key={index}>
							<h3 className={styles.ContentCardVertical_Title}>
								{item.title}
							</h3>
							<h4 className={styles.ContentCardVertical_Icons}>
								{item.icons.map((icon, index) => {
									return (
										<FontAwesomeIcon
											icon={icon}
											key={index}
										/>
									);
								})}
							</h4>

							<hr
								className={
									styles.ContentCardVertical_HorizontalRule
								}
							/>
							{item.content.map((text, index) => {
								return (
									<p
										className={
											styles.ContentCardVertical_Content
										}
										key={index}
									>
										{text}
									</p>
								);
							})}
							{linkBox && (
								<div
									className={
										styles.ContentCardVertical_LinksBox
									}
								>
									{content.map((item, index) => {
										if (item.address !== undefined) {
											return (
												<a
													href={item.address}
													target="_blank"
													rel="noreferrer"
													key={index}
												>
													<FontAwesomeIcon
														icon={item.icons[0]}
														className={
															styles.ContentCardVertical_Link
														}
													/>
												</a>
											);
										}
									})}
								</div>
							)}
							{item.projects.length > 0 && (
								<>
									<hr
										className={
											styles.ContentCardVertical_HorizontalRule
										}
									/>
									<h3
										className={
											styles.ContentCardVertical_Title
										}
									>
										Related Projects
									</h3>
									<ProjectsBox parent={item} />
								</>
							)}
						</div>
					)
				);
			})}
		</>
	);
};

export default CardContent;
