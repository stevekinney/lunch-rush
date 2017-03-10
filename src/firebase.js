import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD3l4A-7fP5CWF63Bp4D4ZDCiPYmKEiG-8',
  authDomain: 'lunch-rush-a1948.firebaseapp.com',
  databaseURL: 'https://lunch-rush-a1948.firebaseio.com',
  storageBucket: 'lunch-rush-a1948.appspot.com',
  messagingSenderId: '534440738431'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
