import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCTb5ZXmHJk5_KuHMU0p9BGRsZ5WoViRvY",
  authDomain: "test-9dd18.firebaseapp.com",
  projectId: "test-9dd18",
  storageBucket: "test-9dd18.appspot.com",
  messagingSenderId: "38479053119",
  appId: "1:38479053119:web:fb935d9f508da0c328d38a",
  measurementId: "G-5T2FB0XFFH"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
console.log(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;
