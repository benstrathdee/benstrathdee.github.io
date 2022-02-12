import React, { useState } from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
import styles from "./Navbar.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ windowIsHorizontal }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const getNavbarClass = () => {
		if (windowIsHorizontal) {
			return styles.Navbar;
		} else {
			if (isExpanded) {
				return styles.NavbarVertical__Expanded;
			} else {
				return styles.NavbarVertical;
			}
		}
	};

	return (
		<div className={styles.NavbarWrapper}>
			{!windowIsHorizontal && (
				<FontAwesomeIcon
					icon={faBars}
					onClick={() => {
						setIsExpanded(!isExpanded);
					}}
					className={styles.MenuIcon}
				/>
			)}
			<div className={getNavbarClass()}>
				<NavbarItem
					name="Home"
					windowIsHorizontal={windowIsHorizontal}
				/>
				<NavbarItem
					name="Skills / Projects"
					windowIsHorizontal={windowIsHorizontal}
				/>
				<NavbarItem
					name="About / Contact"
					windowIsHorizontal={windowIsHorizontal}
				/>
			</div>
		</div>
	);
};

export default Navbar;
