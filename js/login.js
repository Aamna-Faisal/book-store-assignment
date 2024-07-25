import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, FacebookAuthProvider, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuh6CzOMboFT003om_1CXxO1KjGCgCrfQ",
  authDomain: "book-store-44af3.firebaseapp.com",
  projectId: "book-store-44af3",
  storageBucket: "book-store-44af3.appspot.com",
  messagingSenderId: "788849686364",
  appId: "1:788849686364:web:c9b923817877e4dde87399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleloginbtn = document.getElementById('google-btn')
let EmailInp = document.getElementById("email")
let PassInp = document.getElementById("password")
let FullnameInp = document.getElementById("username")
let signupbtn = document.getElementById("sign-up-btn")

//      register  google 
googleloginbtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../addbook.html"
      
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
    });
})


//  login with email and pass
let login=document.getElementById('login-btn')
login.addEventListener("click", ()=>{

    // function loginWithEmailAndPassword() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        
    signInWithEmailAndPassword(auth,email, password)
      .then((Credentials)=> {
        // User successfully logged in
        // var user = userCredential.user;
        console.log('User logged in:', Credentials.user);
        window.location.href = "../addbook.html"
        

      })
      .catch(function(error) {
        // Handle errors
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Login error:', errorCode, errorMessage);
      });
      // }
})