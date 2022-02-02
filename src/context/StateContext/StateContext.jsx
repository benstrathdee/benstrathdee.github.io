import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const [page, setPage] = useState("Home");
	const [active, setActive] = useState("Home");
	const [show, setShow] = useState(false);
	const [showSkill, setShowSkill] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState({});

	const [activeSkill, setActiveSkill] = useState({
		title: "",
		content:
			"Please select an entry from the left to see a detailed description of my skills and any related projects.",
		projects: [],
	});

	const data = {
		page,
		setPage,
		active,
		setActive,
		show,
		setShow,
		activeSkill,
		setActiveSkill,
		showSkill,
		setShowSkill,
		showModal,
		setShowModal,
		modalContent,
		setModalContent,
	};

	return (
		<StateContext.Provider value={data}>{children}</StateContext.Provider>
	);
};
