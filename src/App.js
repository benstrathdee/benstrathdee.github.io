import styles from "./App.module.scss";
import { StateProvider } from "./context/StateContext/StateContext";
import Navbar from "./containers/Navbar/Navbar";
import DisplayWindow from "./containers/DisplayWindow/DisplayWindow";

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
