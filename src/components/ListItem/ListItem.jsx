import React, { useContext } from "react";
import styles from "./ListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StateContext } from "../../context/StateContext/StateContext";
import { wait } from "@testing-library/user-event/dist/utils";

const ListItem = ({ item, selectable }) => {
	const {
		setShowContent,
		activeContent,
		setActiveContent,
		activeListItem,
		setActiveListItem,
	} = useContext(StateContext);

	const itemClass =
		activeListItem === item.id ? styles.ListItem__Active : styles.ListItem;

	const handleClick = async (event) => {
		const nextItem = event.currentTarget.getAttribute("id");
		if (selectable && nextItem !== activeContent) {
			setActiveListItem(nextItem);
			setShowContent(false);
			await wait(300);
			setActiveContent(nextItem);
			setShowContent(true);
		}
	};

	return item.title === "About Me" ? null : (
		<div id={item.id} className={itemClass} onClick={handleClick}>
			<a
				href={item.address}
				target="_blank"
				rel="noreferrer"
				className={styles.ListItem_Link}
			>
				<div className={styles.ListItem_Icons}>
					{item.icons.map((icon, iconIndex) => {
						return <FontAwesomeIcon icon={icon} key={iconIndex} />;
					})}
				</div>
				<div className={styles.ListItem_Title}>{item.title}</div>
			</a>
		</div>
	);
};

export default ListItem;
