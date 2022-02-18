import { useContext, useEffect } from "react";
import { wait } from "@testing-library/user-event/dist/utils";
import styles from "./ContentCard.module.scss";
import CardTitle from "../CardTitle";
import CardContent from "../CardContent";
import CardList from "../CardList";
import { StateContext } from "../../context/StateContext/StateContext";

const ContentCard = ({
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

	const getCardClass = () => {
		if (windowIsHorizontal) {
			switch (size) {
				case "small":
					return showPage
						? styles.SmallCard
						: styles.SmallCard__Invis;
				case "large":
					return showPage
						? styles.LargeCard
						: styles.LargeCard__Invis;
				default:
					return showPage
						? styles.LargeCard
						: styles.LargeCard__Invis;
			}
		}
		return showPage ? styles.VerticalCard : styles.VerticalCard__Invis;
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
		<content-card class={getCardClass()}>
			<CardTitle title={title} size={size} />
			<CardList
				listItems={listItems}
				selectable={selectable}
				size={size}
			/>
			<CardContent content={content} linkBox={linkBox} />
		</content-card>
	);
};

export default ContentCard;
