import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCwjdb6Vhsu04iONjMxCNY-Eo_aCAXoY-c',
  authDomain: 'ask-the-audience.firebaseapp.com',
  databaseURL: 'https://ask-the-audience.firebaseio.com',
  storageBucket: 'ask-the-audience.appspot.com',
  messagingSenderId: '473436394005'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
