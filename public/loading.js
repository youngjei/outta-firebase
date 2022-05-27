import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import {
  getDatabase,
  ref,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbdJpxGUjqMIRlUGshKJW9bOG1KzEIELk",
  authDomain: "test-ad597.firebaseapp.com",
  projectId: "test-ad597",
  storageBucket: "test-ad597.appspot.com",
  messagingSenderId: "606337331667",
  appId: "1:606337331667:web:ff531a29c9b075624aff26",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dbRef = ref(getDatabase(app));

onAuthStateChanged(auth, (user) => {
  const uid = user.uid;

  get(child(dbRef, `users/` + uid)).then((snapshot) => {
    if (snapshot.exists()) {
      const member = snapshot.val().member;
      const admin = snapshot.val().admin;
      if (member == true) {
        if (admin == true) {
          location.href = "document.html";
        } else {
          location.href = "documentuser.html";
        }
      } else {
        alert("You are not a member! Please sign up.");
        location.href = "index.html";
      }
    } else {
      console.log("No data");
    }
  });
});
