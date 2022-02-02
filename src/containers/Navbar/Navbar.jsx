import React from "react";
import NavbarItem from "../../components/NavbarItem/NavbarItem";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<div className={styles.Navbar}>
			<NavbarItem name="Skills / Projects" />
			<NavbarItem name="Home" />
			<NavbarItem name="About / Contact" />
		</div>
	);
};

export default Navbar;
