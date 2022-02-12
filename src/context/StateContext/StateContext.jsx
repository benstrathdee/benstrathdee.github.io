import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const [page, setPage] = useState("Home");
	const [active, setActive] = useState("Home");
	const [show, setShow] = useState(false);
	const [showContent, setShowContent] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState({});
	const [activeItem, setActiveItem] = useState("item1");
	const [activeListItem, setActiveListItem] = useState("item1");

	const data = {
		page,
		setPage,
		active,
		setActive,
		show,
		setShow,
		showContent,
		setShowContent,
		showModal,
		setShowModal,
		modalContent,
		setModalContent,
		activeItem,
		setActiveItem,
		activeListItem,
		setActiveListItem,
	};

	return (
		<StateContext.Provider value={data}>{children}</StateContext.Provider>
	);
};
