import { db } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


// Random Key Generator

function createKey(){

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let part1="";
let part2="";


for(let i=0;i<4;i++){

part1 += chars[Math.floor(Math.random()*chars.length)];

part2 += chars[Math.floor(Math.random()*chars.length)];

}


return `DH-${part1}-${part2}`;

}



// User ID Generator

function createUserId(){

let number = Math.floor(1000 + Math.random()*9000);

return `DH${number}`;

}



// Save Key

export async function generateKey(){


const data={


userId:createUserId(),

key:createKey(),

price:675,

status:"Due",

createdAt:serverTimestamp()


};


await addDoc(collection(db,"keys"),data);


alert("New Key Generated");


}
