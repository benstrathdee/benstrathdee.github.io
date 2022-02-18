import { useContext } from "react";
import { wait } from "@testing-library/user-event/dist/utils";
import styles from "./NavbarItem.module.scss";
import { StateContext } from "../../context/StateContext/StateContext";

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
			return activeNavbarItem === pageName
				? styles.DrawerItem__Current
				: styles.DrawerItem;
		}
		return activeNavbarItem === pageName
			? styles.NavbarItem__Current
			: styles.NavbarItem;
	};

	const changePage = async () => {
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
		<li className={getItemClass()} onClick={changePage}>
			{pageName}
		</li>
	);
};

export default NavbarItem;
