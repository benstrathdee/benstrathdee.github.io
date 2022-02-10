import { wait } from "@testing-library/user-event/dist/utils";
import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./NavbarItem.module.scss";

const NavbarItem = ({ name }) => {
    const { setPage, setActive, active, setShow } = useContext(StateContext);

    const itemClass =
        active === name ? styles.NavbarItem__Current : styles.NavbarItem;

    const changePage = async (name) => {
        if (active !== name) {
            setActive(name);
            setShow(false);
            await wait(300);
            setPage(name);
            await wait(300);
            setShow(true);
        }
    };

    return (
        <div className={itemClass} onClick={() => changePage(name)}>
            {name}
        </div>
    );
};

export default NavbarItem;
