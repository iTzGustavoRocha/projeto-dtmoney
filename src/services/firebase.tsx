import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATDYVHva2nLn23FRgLZj3fqN-ytSsCYHM",
  authDomain: "dt-money-686d3.firebaseapp.com",
  projectId: "dt-money-686d3",
  storageBucket: "dt-money-686d3.firebasestorage.app",
  messagingSenderId: "273594391167",
  appId: "1:273594391167:web:3d1817fd8433185cf7fd4a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
