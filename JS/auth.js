import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

alert("auth.js loaded");

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

    alert("Button Clicked");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {

        alert("Login Success");

        window.location.href = "dashboard.html";

    })
    .catch((error) => {

        alert(error.code);

        document.getElementById("error").innerHTML = error.message;

    });

});
