import { wait } from "@testing-library/user-event/dist/utils";
import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./NavbarItem.module.scss";

const NavbarItem = ({ name }) => {
	const { setPage, setActive, active, setShow } = useContext(StateContext);

	const itemClass =
		active === name ? styles.NavbarItem__Current : styles.NavbarItem;

	const handleClick = async (event) => {
		if (active !== name) {
			setActive(event.target.id);
			setShow(false);
			await wait(300);
			setPage(event.target.id);
			await wait(300);
			setShow(true);
		}
	};

	return (
		<div className={itemClass} id={name} onClick={handleClick}>
			{name}
		</div>
	);
};

export default NavbarItem;
