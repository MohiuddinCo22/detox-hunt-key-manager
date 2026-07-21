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
orderBy,
doc,
deleteDoc
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

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async ()=>{

    try {

        await signOut(auth);

        alert("Logout Successful");

        window.location.href="login.html";

    } catch(error){

        console.log(error);

        alert(error.message);

    }

});





// Load Keys From Firestore


function loadKeys(){


const keyTable=document.getElementById("keyList");



const q = collection(db,"keys");





onSnapshot(q,(snapshot)=>{


keyTable.innerHTML="";


let sl=1;


console.log("Total data:", snapshot.size);
snapshot.forEach((item)=>{


const data=item.data();



keyTable.innerHTML += `

<tr>

<td>${sl}</td>

<td>${data.userId}</td>

<td>${data.key}</td>

<td>৳${data.price}</td>

<td>${data.status}</td>

<td>

<button onclick="copyKey('${data.key}')">
Copy
</button>


<button class="delete-btn" onclick="deleteKey('${item.id}')">
Delete
</button>


</td>

</tr>

`;



sl++;


});



document.getElementById("totalKeys").innerText=snapshot.size;



});


}

// Copy Key

window.copyKey = function(key){

navigator.clipboard.writeText(key);

alert("Key Copied: " + key);

}



// Delete Key

window.deleteKey = async function(id){


let confirmDelete = confirm("Are you sure you want to delete?");


if(confirmDelete){


await deleteDoc(doc(db,"keys",id));


alert("Key Deleted");


}


}
