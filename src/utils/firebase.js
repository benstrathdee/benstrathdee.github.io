import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAi2jfSxwpmug66XXzykWx02lmdASGeuJk",
	authDomain: "portfolio-data-75954.firebaseapp.com",
	projectId: "portfolio-data-75954",
	storageBucket: "portfolio-data-75954.appspot.com",
	messagingSenderId: "14773050735",
	appId: "1:14773050735:web:e96e7259f7428882201c9a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
