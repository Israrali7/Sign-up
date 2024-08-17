import { app } from "./firebase.mjs";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc

} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"

const auth = getAuth();
const db = getFirestore(app);

// Function to create a new user account
function signUpUser() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPass = document.getElementById('ConfirmPass').value;

  if (password !== confirmPass) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User created successfully:", user);
      window.location.href = '/index.html';  // Redirect to the desired page after signup
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorCode, errorMessage);
    });
}

// Function to sign in an existing user
function signInUser() {
  let lemail = document.getElementById('lemail').value;
  let lpassword = document.getElementById('lpassword').value;

  signInWithEmailAndPassword(auth, lemail, lpassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User signed in successfully:", user);
      window.location.href = 'files/dashboard.html';  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in:", errorCode, errorMessage);
    });
}

// function To sign out  the user 
function signOutUser() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

// Function to addDocs 
async function addDoc(){
  try {
    const docRef = await addDoc(collection(db, "users"), {

    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// // Add a second document with a generated ID.
// import { addDoc, collection } from "firebase/firestore"; 

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// // getDocs
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });




// Getting Sign in or Sign up buttons
let signUp = document.getElementById('signUp');
let signIn = document.getElementById('signIn');
let signOut = document.getElementById('signOut');


// Event listeners for the buttons
signIn.addEventListener('click', signInUser);
signUp.addEventListener('click', signUpUser);
signOut.addEventListener('click', signOutUser);


// Function to Auth Change
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);
  } else {
    // No user is signed in
    console.log("No user is signed in");
  }
});






