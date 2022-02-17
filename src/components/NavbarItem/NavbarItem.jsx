import { wait } from "@testing-library/user-event/dist/utils";
import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./NavbarItem.module.scss";

const NavbarItem = ({ pageName }) => {
	const {
		activePage,
		setActivePage,
		setActiveNavbarItem,
		activeNavbarItem,
		setShowPage,
		windowIsHorizontal,
		navbarIsExpanded,
		setNavbarIsExpanded,
	} = useContext(StateContext);

	const getItemClass = () => {
		if (!windowIsHorizontal) {
			if (activeNavbarItem === pageName) {
				return styles.NavbarItemVertical__Current;
			} else {
				return styles.NavbarItemVertical;
			}
		} else {
			if (activeNavbarItem === pageName) {
				return styles.NavbarItem__Current;
			} else {
				return styles.NavbarItem;
			}
		}
	};

	const changePage = async (pageName) => {
		if (activePage !== pageName) {
			setActiveNavbarItem(pageName);
			if (navbarIsExpanded) {
				setNavbarIsExpanded(false);
			}
			setShowPage(false);
			await wait(500);
			setActivePage(pageName);
			await wait(50);
			setShowPage(true);
		} else if (navbarIsExpanded) {
			setNavbarIsExpanded(false);
		}
	};

	return (
		<div className={getItemClass()} onClick={() => changePage(pageName)}>
			{pageName}
		</div>
	);
};

export default NavbarItem;
