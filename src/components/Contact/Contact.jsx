import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";
import styles from "./Contact.module.scss";

const Contact = () => {
	const { show } = useContext(StateContext);
	const contactClass = show ? styles.Contact : styles.Contact__Invis;
	return (
		<div className={contactClass}>
			<p>sdfusidfiausdfaphdfausdfpadsfasdfasdf</p>
		</div>
	);
};

export default Contact;
