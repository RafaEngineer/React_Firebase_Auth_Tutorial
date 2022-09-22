import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa0al2rbTgh560-ms6J11ENi_tA4eYSe8",
    authDomain: "aquila-e54aa.firebaseapp.com",
    projectId: "aquila-e54aa",
    storageBucket: "aquila-e54aa.appspot.com",
    messagingSenderId: "112389775118",
    appId: "1:112389775118:web:ac38e48eb26070ee66015f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
