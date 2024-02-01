// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChwZgfCs9ibv2x_H1X574A1BYSYDQHkC0",
  authDomain: "sadface-363eb.firebaseapp.com",
  projectId: "sadface-363eb",
  storageBucket: "sadface-363eb.appspot.com",
  messagingSenderId: "73338442820",
  appId: "1:73338442820:web:f7bdeb69cf79fb82f71811",
  measurementId: "G-FKDV1DPJFW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export default db;