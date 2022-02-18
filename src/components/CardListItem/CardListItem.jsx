import React, { useContext } from "react";
import { wait } from "@testing-library/user-event/dist/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CardListItem.module.scss";
import { StateContext } from "../../context/StateContext/StateContext";

const CardListItem = ({ listItems, item, selectable }) => {
	const {
		setShowContent,
		activeContent,
		setActiveContent,
		activeListItem,
		setActiveListItem,
	} = useContext(StateContext);

	const itemClass =
		activeListItem === item.id ? styles.Item__Active : styles.Item;

	const changeActive = async (event) => {
		const nextItem = event.currentTarget.getAttribute("id");
		if (selectable && nextItem !== activeContent) {
			setActiveListItem(nextItem);
			setShowContent(false);
			await wait(300);
			setActiveContent(nextItem);
			setShowContent(true);
		}
	};

	return !selectable && listItems.indexOf(item) === 0 ? null : (
		<li id={item.id} className={itemClass} onClick={changeActive}>
			<a
				href={item.address}
				target="_blank"
				rel="noreferrer"
				className={styles.Item_Link}
			>
				<h6 className={styles.Item_Icons}>
					{item.icons.map((icon, iconIndex) => {
						return <FontAwesomeIcon icon={icon} key={iconIndex} />;
					})}
				</h6>
				<h5 className={styles.Item_Title}>{item.title}</h5>
			</a>
		</li>
	);
};

export default CardListItem;
