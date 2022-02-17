import React, { useContext, useEffect } from "react";
import CardTitle from "../CardTitle";
import CardContent from "../CardContent";
import CardList from "../CardList";
import styles from "./CardWrapper.module.scss";
import { StateContext } from "../../context/StateContext/StateContext";
import { wait } from "@testing-library/user-event/dist/utils";

const CardWrapper = ({
	title,
	listItems,
	selectable,
	content,
	size,
	linkBox,
}) => {
	const {
		showPage,
		setActiveContent,
		setActiveListItem,
		windowIsHorizontal,
	} = useContext(StateContext);

	const getWrapperClass = () => {
		if (windowIsHorizontal) {
			return showPage ? styles.CardWrapper : styles.CardWrapper__Invis;
		}
		return showPage
			? styles.CardWrapperVertical
			: styles.CardWrapperVertical__Invis;
	};

	const getCardClass = () => {
		if (windowIsHorizontal) {
			switch (size) {
				case "small":
					return styles.Card__Small;
				case "large":
					return styles.Card__Large;
				default:
					return styles.Card__Large;
			}
		}
		return styles.Card__Vertical;
	};

	const changePage = async () => {
		await wait(500);
		setActiveContent("item1");
		setActiveListItem("item1");
	};

	useEffect(() => {
		changePage();
	}, [showPage]);

	return (
		<div className={getWrapperClass()}>
			<div className={getCardClass()}>
				<CardTitle title={title} size={size} />
				<CardList
					listItems={listItems}
					selectable={selectable}
					size={size}
				/>
				<CardContent content={content} linkBox={linkBox} />
			</div>
		</div>
	);
};

export default CardWrapper;
