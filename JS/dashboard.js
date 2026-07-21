import { auth } from "./firebase.js";
import { generateKey } from "./keyGenerator.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


// Authentication Guard

onAuthStateChanged(auth,(user)=>{

if(user){

console.log("Logged in:",user.email);

}else{

window.location.href="login.html";

}

});



// Generate Button

const generateBtn = document.getElementById("generateBtn");


generateBtn.addEventListener("click",()=>{

generateKey();

});



// Logout

const logoutBtn=document.getElementById("logoutBtn");


logoutBtn.addEventListener("click",()=>{


signOut(auth)
.then(()=>{

window.location.href="login.html";

});


});
