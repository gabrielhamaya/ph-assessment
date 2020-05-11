import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyAnIFErHpfkWPj5PXsNng0WNejny7FMyVw',
  authDomain: 'ph-assessment-backend.firebaseapp.com',
  databaseURL: 'https://ph-assessment-backend.firebaseio.com',
  projectId: 'ph-assessment-backend',
  storageBucket: 'ph-assessment-backend.appspot.com',
  messagingSenderId: '174680846645',
  appId: '1:174680846645:web:5893a88d06317e529c1c7c',
  measurementId: 'G-ZM86R9B2FX',
};

export const fire = firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
