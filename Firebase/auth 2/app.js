import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSXk1XDWAMBO3xBSED8KzULdiFZo5bx1M",
  authDomain: "batch-13-c70f6.firebaseapp.com",
  projectId: "batch-13-c70f6",
  storageBucket: "batch-13-c70f6.firebasestorage.app",
  messagingSenderId: "1067442679083",
  appId: "1:1067442679083:web:b191b72c1e8b46f62ea96e",
  measurementId: "G-XB6DK1QJ1D",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let getSbtn = document.querySelector("#s-btn");
if (getSbtn) {
  getSbtn.addEventListener("click", () => {
    let email = document.querySelector("#s-email").value;
    let password = document.querySelector("#s-pass").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email + " has successfully sign up");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
}

let getLbtn = document.querySelector("#l-btn");
if (getLbtn) {
  getLbtn.addEventListener("click", () => {
    let email = document.querySelector("#l-email").value;
    let password = document.querySelector("#l-pass").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          title: "Login Success",
          icon: "success",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials",
          text: "Something went wrong!",
          footer: '<a href="./index.html">sign up</a>',
        });
      });
  });
}

let logout = document.getElementById("lg-out");

if (logout) {
  logout.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.log("Error logging out:", error);
      });
  });
}
