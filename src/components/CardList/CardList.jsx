import React, { useContext, useEffect, useState } from "react";
import styles from "./CardList.module.scss";
import ListItem from "../ListItem";
import { StateContext } from "../../context/StateContext/StateContext";

const CardList = ({ listItems, selectable, show }) => {
	const { activeItem, setActiveItem, activeListItem, setActiveListItem } =
		useContext(StateContext);

	useEffect(() => {
		setActiveListItem("item1");
	}, [show]);

	return (
		<div className={styles.CardList}>
			{listItems.map((item, index) => {
				return (
					<ListItem
						item={item}
						key={index}
						activeItem={activeItem}
						setActiveItem={setActiveItem}
						activeListItem={activeListItem}
						setActiveListItem={setActiveListItem}
						selectable={selectable}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
