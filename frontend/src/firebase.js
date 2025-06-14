// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcPJL6q6VxTDQQXAgoxx8NebFv_LLWckU",
  authDomain: "blinkyui-67924.firebaseapp.com",
  projectId: "blinkyui-67924",
  storageBucket: "blinkyui-67924.firebasestorage.app",
  messagingSenderId: "183241332393",
  appId: "1:183241332393:web:c61f26c7a0ecffe4563bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app; 