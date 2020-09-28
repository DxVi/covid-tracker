import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2uRz_yaQ4Q1QfNwy4DnR6iYcwPjRwX_0",
  authDomain: "covid-tracker-29b76.firebaseapp.com",
  databaseURL: "https://covid-tracker-29b76.firebaseio.com",
  projectId: "covid-tracker-29b76",
  storageBucket: "covid-tracker-29b76.appspot.com",
  messagingSenderId: "833801039323",
  appId: "1:833801039323:web:7b92c137df326571740bfe",
  measurementId: "G-BNGDHF6BDR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
