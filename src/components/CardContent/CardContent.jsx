import { useContext, useEffect } from "react";
import styles from "./CardContent.module.scss";
import ProjectBox from "./../ProjectBox";
import { StateContext } from "../../context/StateContext/StateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardContent = ({ content, linkBox }) => {
	const { showContent, setShowContent, activeContent, windowIsHorizontal } =
		useContext(StateContext);

	const getContentClass = () => {
		if (windowIsHorizontal) {
			return showContent ? styles.Horizontal : styles.Horizontal__Invis;
		}
		return showContent ? styles.Vertical : styles.Vertical__Invis;
	};

	const activeItem = content.filter((item) => item.id === activeContent)[0];

	useEffect(() => {
		setShowContent(true);
	}, [setShowContent]);

	return windowIsHorizontal ? (
		<card-content class={getContentClass()}>
			<h3 className={styles.Horizontal_Title}>{activeItem.title}</h3>
			<hr className={styles.Horizontal_Break} />
			{activeItem.content.map((text, index) => {
				return (
					<p className={styles.Horizontal_Content} key={index}>
						{text}
					</p>
				);
			})}
			{activeItem.points.length > 0 && (
				<ul>
					{activeItem.points.map((text, index) => {
						return <li key={index}>{text}</li>;
					})}
				</ul>
			)}
			{activeItem.projects.length > 0 && (
				<ProjectBox parent={activeItem} />
			)}
		</card-content>
	) : (
		content.map((item, index) => {
			return (
				item.content.length > 0 && (
					<card-content class={getContentClass()} key={index}>
						<h3 className={styles.Vertical_Title}>{item.title}</h3>
						<h4 className={styles.Vertical_Icons}>
							{item.icons.map((icon, index) => {
								return (
									<FontAwesomeIcon icon={icon} key={index} />
								);
							})}
						</h4>
						<hr className={styles.Vertical_Break} />
						{item.content.map((text, index) => {
							return (
								<p
									className={styles.Vertical_Content}
									key={index}
								>
									{text}
								</p>
							);
						})}
						{activeItem.points.length > 0 && (
							<ul>
								{activeItem.points.map((text, index) => {
									return <li key={index}>{text}</li>;
								})}
							</ul>
						)}
						{linkBox && (
							<span className={styles.Vertical_LinksBox}>
								{content.map((item, index) => {
									return item.address === undefined ? null : (
										<a
											href={item.address}
											target="_blank"
											rel="noreferrer"
											key={index}
										>
											<FontAwesomeIcon
												icon={item.icons[0]}
												className={
													styles.Vertical_LinkIcon
												}
											/>
										</a>
									);
								})}
							</span>
						)}
						{item.projects.length > 0 && (
							<ProjectBox parent={item} />
						)}
					</card-content>
				)
			);
		})
	);
};

export default CardContent;
