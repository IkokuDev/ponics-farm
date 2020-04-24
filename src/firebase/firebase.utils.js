import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwIf9UdXYqxq1GfUBlKWOJAStsBgcwudA",
    authDomain: "wardrobe-db.firebaseapp.com",
    databaseURL: "https://wardrobe-db.firebaseio.com",
    projectId: "wardrobe-db",
    storageBucket: "wardrobe-db.appspot.com",
    messagingSenderId: "1071376914348",
    appId: "1:1071376914348:web:6c4655e37407a7b3bbcc09",
    measurementId: "G-KHY62H4SHN"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc('users/3847tgfb7v')
    const snapShot = await userRef.get();

    console.log(snapShot);
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;