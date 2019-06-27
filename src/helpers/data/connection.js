import firebase from 'firebase/app';
import firebaseKeys from '../apiKeys';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseKeys.doggieKeys);
  }
};

export default firebaseApp;
