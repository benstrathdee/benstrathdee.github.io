import React, { useContext } from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
import styles from "./Navbar.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StateContext } from "../../context/StateContext/StateContext";

const Navbar = () => {
	const {
		windowIsHorizontal,
		navbarIsExpanded,
		setNavbarIsExpanded,
		activePage,
	} = useContext(StateContext);

	const getNavbarClass = () => {
		if (windowIsHorizontal) {
			return styles.Navbar;
		} else {
			if (navbarIsExpanded) {
				return styles.Drawer__Expanded;
			} else {
				return styles.Drawer;
			}
		}
	};

	return (
		<>
			{!windowIsHorizontal && (
				<div className={styles.NavbarVertical}>
					<FontAwesomeIcon
						icon={faBars}
						onClick={() => {
							setNavbarIsExpanded(!navbarIsExpanded);
						}}
						className={styles.NavbarVertical_MenuIcon}
					/>
					<h2 className={styles.NavbarVertical_PageTitle}>
						{activePage}
					</h2>
				</div>
			)}
			<div className={getNavbarClass()}>
				<NavbarItem pageName="Home" />
				<NavbarItem pageName="Skills" />
				<NavbarItem pageName="About Me" />
			</div>
		</>
	);
};

export default Navbar;
