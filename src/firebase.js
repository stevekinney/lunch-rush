import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDF5fNQt4crBE4Q4eYY9UyGDTcBfVOhKDw",
  authDomain: "lunch-rush-203b0.firebaseapp.com",
  databaseURL: "https://lunch-rush-203b0.firebaseio.com",
  projectId: "lunch-rush-203b0",
  storageBucket: "lunch-rush-203b0.appspot.com",
  messagingSenderId: "806243336315"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
