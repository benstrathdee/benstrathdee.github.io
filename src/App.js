import styles from "./App.module.scss";
import Navbar from "./components/Navbar";
import ContentBody from "./components/ContentBody";
import { StateProvider } from "./context/StateContext/StateContext";
import "./utils/CustomElements";

function App() {
	return (
		<app-body class={styles.App}>
			<StateProvider>
				<Navbar />
				<ContentBody />
			</StateProvider>
		</app-body>
	);
}

export default App;
