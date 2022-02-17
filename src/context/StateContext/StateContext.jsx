import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const [showPage, setShowPage] = useState(false);
	const [activePage, setActivePage] = useState("Home");

	const [activeNavbarItem, setActiveNavbarItem] = useState("Home");

	const [showContent, setShowContent] = useState(false);
	const [activeContent, setActiveContent] = useState("item1");

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState({});

	const [navbarIsExpanded, setNavbarIsExpanded] = useState(false);

	const [activeListItem, setActiveListItem] = useState("item1");

	const [windowIsHorizontal, setWindowIsHorizontal] = useState(
		window.innerWidth > window.innerHeight
	);

	const checkWindow = () => {
		setWindowIsHorizontal(window.innerWidth > window.innerHeight);
	};

	window.addEventListener("resize", checkWindow);

	const data = {
		activePage,
		setActivePage,
		activeNavbarItem,
		setActiveNavbarItem,
		showPage,
		setShowPage,
		showContent,
		setShowContent,
		showModal,
		setShowModal,
		modalContent,
		setModalContent,
		activeContent,
		setActiveContent,
		activeListItem,
		setActiveListItem,
		windowIsHorizontal,
		navbarIsExpanded,
		setNavbarIsExpanded,
	};

	return (
		<StateContext.Provider value={data}>{children}</StateContext.Provider>
	);
};
