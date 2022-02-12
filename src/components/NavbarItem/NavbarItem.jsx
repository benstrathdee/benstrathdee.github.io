import { wait } from "@testing-library/user-event/dist/utils";
import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./NavbarItem.module.scss";

const NavbarItem = ({ name, windowIsHorizontal }) => {
	const { page, setPage, setActive, active, setShow } =
		useContext(StateContext);

	const getItemClass = () => {
		if (!windowIsHorizontal) {
			if (active === name) {
				return styles.NavbarItemVertical__Current;
			} else {
				return styles.NavbarItemVertical;
			}
		} else {
			if (active === name) {
				return styles.NavbarItem__Current;
			} else {
				return styles.NavbarItem;
			}
		}
	};

	const changePage = async (name) => {
		if (page !== name) {
			setActive(name);
			setShow(false);
			await wait(500);
			setPage(name);
			await wait(50);
			setShow(true);
		}
	};

	return (
		<div className={getItemClass()} onClick={() => changePage(name)}>
			{name}
		</div>
	);
};

export default NavbarItem;
