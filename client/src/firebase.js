import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzn3yroWvAYPbAzwSkDrvX2rRmBMBOQew",
    authDomain: "disneyplus-clone-81c8c.firebaseapp.com",
    projectId: "disneyplus-clone-81c8c",
    storageBucket: "disneyplus-clone-81c8c.appspot.com",
    messagingSenderId: "753983819774",
    appId: "1:753983819774:web:ab49a8aaf1301cbe2bbaaf",
    measurementId: "G-NKQLDFT9CC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;

