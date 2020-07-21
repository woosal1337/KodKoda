require('dotenv').config({path:'./.env.local' })
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

console.log(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);

firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  });
  
const db = firebase.firestore();

db.collection("posts").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
});