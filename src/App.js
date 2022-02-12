import styles from "./App.module.scss";
import { StateProvider } from "./context/StateContext/StateContext";
import Navbar from "./components/Navbar";
import DisplayWindow from "./components/DisplayWindow";
import { useState } from "react";

function App() {
	const [windowIsHorizontal, setWindowIsHorizontal] = useState(
		window.innerWidth > window.innerHeight
	);

	const checkWindow = () => {
		setWindowIsHorizontal(window.innerWidth > window.innerHeight);
	};

	window.addEventListener("resize", checkWindow);

	return (
		<div className={styles.App}>
			<StateProvider>
				<Navbar windowIsHorizontal={windowIsHorizontal} />
				<DisplayWindow />
			</StateProvider>
		</div>
	);
}

export default App;
