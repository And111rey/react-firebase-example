import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBivsxRlzEHtdAt9V7KMqMETuvbXrkDuDk",
  authDomain: "p-not-99caf.firebaseapp.com",
  databaseURL: "https://p-not-99caf.firebaseio.com",
  projectId: "p-not-99caf",
  storageBucket: "p-not-99caf.appspot.com",
  messagingSenderId: "183848580389",
  appId: "1:183848580389:web:382d5c8f65fc1df04b96cc",
  measurementId: "G-JF8XXN2S6Y"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



