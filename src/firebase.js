import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyB5etbYRNA2tV6chEMdpLAhA4Nhlf4Y3Jg",
  authDomain: "let-s-chat-c5598.firebaseapp.com",
  projectId: "let-s-chat-c5598",
  storageBucket: "let-s-chat-c5598.appspot.com",
  messagingSenderId: "416698062196",
  appId: "1:416698062196:web:dc5c3550b5cd38ef598821"
}).auth();