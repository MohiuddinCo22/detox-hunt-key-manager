import { auth, db } from "./firebase.js";
import { generateKey } from "./keyGenerator.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
collection,
onSnapshot,
query,
orderBy
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


// Authentication Guard

onAuthStateChanged(auth,(user)=>{

if(user){

console.log("Logged in:",user.email);

loadKeys();

}else{

window.location.href="login.html";

}

});




// Generate Button

const generateBtn=document.getElementById("generateBtn");


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





// Load Keys From Firestore


function loadKeys(){


const keyTable=document.getElementById("keyList");


const q=query(
collection(db,"keys"),
orderBy("createdAt","desc")
);



onSnapshot(q,(snapshot)=>{


keyTable.innerHTML="";


let sl=1;



snapshot.forEach((doc)=>{


const data=doc.data();



keyTable.innerHTML += `

<tr>

<td>${sl}</td>

<td>${data.userId}</td>

<td>${data.key}</td>

<td>৳${data.price}</td>

<td>${data.status}</td>

<td>
<button>
Copy
</button>
</td>

</tr>

`;



sl++;


});



document.getElementById("totalKeys").innerText=snapshot.size;



});


}
