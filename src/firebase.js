import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxx",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;