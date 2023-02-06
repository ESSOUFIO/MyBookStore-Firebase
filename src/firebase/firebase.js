import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFTP18_u3e5msc0l0fzlKkbo067c34ngw",
  authDomain: "mybookstore-c4e41.firebaseapp.com",
  projectId: "mybookstore-c4e41",
  storageBucket: "mybookstore-c4e41.appspot.com",
  messagingSenderId: "351778788350",
  appId: "1:351778788350:web:03ad33c81bb20417c0e6af",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
