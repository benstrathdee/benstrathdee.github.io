import React from "react";
import NavbarItem from "../../components/NavbarItem/NavbarItem";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<div className={styles.Navbar}>
			<NavbarItem name="Home" />
			<NavbarItem name="Skills" />
			<NavbarItem name="Projects" />
			<NavbarItem name="About" />
			<NavbarItem name="Contact" />
		</div>
	);
};

export default Navbar;
