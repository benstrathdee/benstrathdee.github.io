import styles from "./App.module.scss";
import { StateProvider } from "./context/StateContext/StateContext";
import Navbar from "./components/Navbar";
import DisplayWindow from "./components/DisplayWindow";

function App() {
	return (
		<div className={styles.App}>
			<StateProvider>
				<Navbar />
				<DisplayWindow />
			</StateProvider>
		</div>
	);
}

export default App;
