import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB0arTIKCBUq1Vf_xaZIg56ycc7bX2HxMY",
  authDomain: "goalcoach-5914e.firebaseapp.com",
  databaseURL: "https://goalcoach-5914e.firebaseio.com",
  projectId: "goalcoach-5914e",
  storageBucket: "goalcoach-5914e.appspot.com",
  messagingSenderId: "830603064754"
};

export const firebaseApp = firebase.initializeApp(config)
