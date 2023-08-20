import firebase from "firebase";
// require("@firebase/firestore")
//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyB_BQ5GFjhxQupy-PQ1ygEYVMF9ylbM1UI",
  authDomain: "schoolattendanceapp-543a9.firebaseapp.com",
  projectId: "schoolattendanceapp-543a9",
  storageBucket: "schoolattendanceapp-543a9.appspot.com",
  messagingSenderId: "138404951082",
  appId: "1:138404951082:web:d24e684c56e85cf21d7f53"
};

firebase.initializeApp(firebaseConfig)

export default firebase.database()
 

  