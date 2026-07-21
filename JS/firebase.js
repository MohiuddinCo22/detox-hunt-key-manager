// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC8W8h4cWcpjPbSCLW094_5SNNraYsR7Qc",
  authDomain: "detox-hunt-key-manager.firebaseapp.com",
  projectId: "detox-hunt-key-manager",
  storageBucket: "detox-hunt-key-manager.firebasestorage.app",
  messagingSenderId: "830899659000",
  appId: "1:830899659000:web:18d39b223590e590b41b0d"
};

// Initialize
const app = initializeApp(firebaseConfig);

// Export
export const auth = getAuth(app);
export const db = getFirestore(app);
