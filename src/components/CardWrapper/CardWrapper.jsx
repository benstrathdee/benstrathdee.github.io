import React, { useContext, useEffect } from "react";
import CardTitle from "../CardTitle";
import CardContent from "../CardContent";
import CardList from "../CardList";
import styles from "./CardWrapper.module.scss";
import { StateContext } from "../../context/StateContext/StateContext";
import { wait } from "@testing-library/user-event/dist/utils";

const CardWrapper = ({ title, listItems, selectable, content, size }) => {
	const { show, setActiveItem, setActiveListItem } = useContext(StateContext);

	const wrapperClass = show ? styles.CardWrapper : styles.CardWrapper__Invis;

	const getCardClass = () => {
		switch (size) {
			case "small":
				return styles.Card__Small;
			case "medium":
				return styles.Card__Medium;
			case "large":
				return styles.Card__Large;
			default:
				return styles.Card__Large;
		}
	};

	const changePage = async () => {
		await wait(500);
		setActiveItem("item1");
		setActiveListItem("item1");
	};

	useEffect(() => {
		changePage();
	}, [show]);

	return (
		<div className={wrapperClass}>
			<div className={getCardClass()}>
				<CardTitle title={title} />
				<CardList
					listItems={listItems}
					selectable={selectable}
					size={size}
				/>
				<CardContent content={content} />
			</div>
		</div>
	);
};

export default CardWrapper;
