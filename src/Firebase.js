import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBscgx2tabgVwNcBldpRoj0hr_Nq6Nltws",
  authDomain: "bea-display.firebaseapp.com",
  databaseURL: "https://bea-display-default-rtdb.firebaseio.com",
  projectId: "bea-display",
  storageBucket: "bea-display.appspot.com",
  messagingSenderId: "454412801178",
  appId: "1:454412801178:web:cf0f6d3efd888baa7cfb23",
  measurementId: "G-2D3C4FLB14",
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

export default database;