import React, { useContext, useEffect } from "react";
import styles from "./CardList.module.scss";
import ListItem from "../ListItem";
import { StateContext } from "../../context/StateContext/StateContext";

const CardList = ({ listItems, selectable, size }) => {
	const { setActiveListItem, windowIsHorizontal, showPage } =
		useContext(StateContext);

	const listClass =
		size === "small" ? styles.CardList__Small : styles.CardList;

	useEffect(() => {
		setActiveListItem("item1");
	}, [showPage]);

	return !windowIsHorizontal ? null : (
		<div className={listClass}>
			{listItems.map((item, index) => {
				return (
					<ListItem key={index} item={item} selectable={selectable} />
				);
			})}
		</div>
	);
};

export default CardList;
