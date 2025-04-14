// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection,getDocs,addDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {fetchHistoryData } from "./my-modules/fetch-history-data.js";
import {submitData} from "./my-modules/submit-data.js";
// Your web app's Firebase configuration
const _firebaseConfig = {
  apiKey: "AIzaSyCuScBmNOC4_PVLV3QNw5B_PDkwz2jjqg0",
  authDomain: "daily-report-f8e54.firebaseapp.com",
  projectId: "daily-report-f8e54",
  storageBucket: "daily-report-f8e54.firebasestorage.app",
  messagingSenderId: "439757053623",
  appId: "1:439757053623:web:cb4a90391695326d23f732"
};
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

if(document.getElementById("js-history")){
  fetchHistoryData(getDocs,collection,db);
}

if(document.getElementById("js-form")){
  document.getElementById("js-form").addEventListener("submit",(e)=>submitData(e,addDoc,collection,db));
}