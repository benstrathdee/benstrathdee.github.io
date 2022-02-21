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
		if (windowIsHorizontal) return styles.Horizontal;
		return navbarIsExpanded ? styles.Drawer__Expanded : styles.Drawer;
	};

	const menuIconClass = navbarIsExpanded
		? styles.Vertical_Icon__Expanded
		: styles.Vertical_Icon;

	return (
		<>
			{!windowIsHorizontal && (
				<>
					<nav className={styles.Vertical}>
						<button
							onClick={() => {
								setNavbarIsExpanded(!navbarIsExpanded);
							}}
							className={styles.Vertical_Button}
						>
							<FontAwesomeIcon
								icon={faChevronDown}
								className={menuIconClass}
							/>
						</button>
						<h2 className={styles.Vertical_Title}>{activePage}</h2>
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
					<ul
						className={getNavbarClass()}
						onTouchStart={(e) => e.stopPropagation()}
					>
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
