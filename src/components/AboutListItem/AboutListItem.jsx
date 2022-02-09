import React from "react";
import styles from "./AboutListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutListItem = ({ link }) => {
	return (
		<a
			href={link.address}
			target="_blank"
			rel="noreferrer"
			className={styles.ItemWrapper}
		>
			<li className={styles.ItemWrapper_Item}>
				<div className={styles.ItemWrapper_Icon}>
					<FontAwesomeIcon icon={link.icon} />
				</div>
				<div className={styles.ItemWrapper_Title}>{link.title}</div>
			</li>
		</a>
	);
};

export default AboutListItem;
