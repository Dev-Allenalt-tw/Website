import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_APP.firebaseapp.com",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  storageBucket: "YOUR_FIREBASE_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getGuildInfo() {
  return {
    name: "TFF TEAM",
    leader: "Rohit",
    region: "India",
    members: 49,
    joinDate: "2021-03-12",
  };
}

export async function getGuildStatus() {
  return { status: "Online ✅ Bot Connected" };
}
