import { useContext } from "react";
import styles from "./Navbar.module.scss";
import NavbarItem from "../NavbarItem/NavbarItem";
import { StateContext } from "../../context/StateContext/StateContext";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
	const {
		windowIsHorizontal,
		navbarIsExpanded,
		setNavbarIsExpanded,
		activePage,
	} = useContext(StateContext);

	const getNavbarClass = () => {
		if (windowIsHorizontal) return styles.Navbar;
		return navbarIsExpanded ? styles.Drawer__Expanded : styles.Drawer;
	};

	const menuIconClass = navbarIsExpanded
		? styles.NavbarVertical_MenuIcon__Expanded
		: styles.NavbarVertical_MenuIcon;

	return (
		<>
			{!windowIsHorizontal && (
				<>
					<nav className={styles.NavbarVertical}>
						<FontAwesomeIcon
							icon={faChevronDown}
							onClick={() => {
								setNavbarIsExpanded(!navbarIsExpanded);
							}}
							className={menuIconClass}
						/>
						<h2 className={styles.NavbarVertical_PageTitle}>
							{activePage}
						</h2>
					</nav>
				</>
			)}
			{windowIsHorizontal ? (
				<nav>
					<ul className={getNavbarClass()}>
						<NavbarItem pageName="Home" />
						<NavbarItem pageName="Skills" />
						<NavbarItem pageName="About Me" />
					</ul>
				</nav>
			) : (
				<nav-drawer>
					<ul className={getNavbarClass()}>
						<NavbarItem pageName="Home" />
						<NavbarItem pageName="Skills" />
						<NavbarItem pageName="About Me" />
					</ul>
				</nav-drawer>
			)}
		</>
	);
};

export default Navbar;
