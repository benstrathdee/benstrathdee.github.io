import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const [page, setPage] = useState("Home");
	const [active, setActive] = useState("Home");
	const [show, setShow] = useState(false);

	const data = { page, setPage, active, setActive, show, setShow };

	return (
		<StateContext.Provider value={data}>{children}</StateContext.Provider>
	);
};
