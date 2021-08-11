import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAFJ9hKGlZZfxYOUBdPzF3gtSxquubhGRA",
    authDomain: "costanzashop-972b3.firebaseapp.com",
    projectId: "costanzashop-972b3",
    storageBucket: "costanzashop-972b3.appspot.com",
    messagingSenderId: "798691923232",
    appId: "1:798691923232:web:08ba8c81f72bb4c61ff345",
    measurementId: "G-3NE6NXTEMN"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export default firebase;