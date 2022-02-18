import { useContext, useEffect } from "react";
import styles from "./CardList.module.scss";
import CardListItem from "../CardListItem";
import { StateContext } from "../../context/StateContext/StateContext";

const CardList = ({ listItems, selectable, size }) => {
	const { setActiveListItem, windowIsHorizontal, showPage } =
		useContext(StateContext);

	const listClass = size === "small" ? styles.List__Small : styles.List;

	useEffect(() => {
		setActiveListItem("item1");
	}, [showPage]);

	return !windowIsHorizontal ? null : (
		<card-list class={listClass}>
			{listItems.map((item, index) => {
				return (
					<CardListItem
						key={index}
						listItems={listItems}
						item={item}
						selectable={selectable}
					/>
				);
			})}
		</card-list>
	);
};

export default CardList;
