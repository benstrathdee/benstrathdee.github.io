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
		? styles.NavbarVertical_Icon__Expanded
		: styles.NavbarVertical_Icon;

	return (
		<>
			{!windowIsHorizontal && (
				<>
					<nav className={styles.NavbarVertical}>
						<button
							onClick={() => {
								setNavbarIsExpanded(!navbarIsExpanded);
							}}
							className={styles.NavbarVertical_Button}
						>
							<FontAwesomeIcon
								icon={faChevronDown}
								className={menuIconClass}
							/>
						</button>
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
