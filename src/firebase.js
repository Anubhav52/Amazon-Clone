import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDpSy9d-64OV-Vb29f6Nre-pl-GSTlfhTc',
  authDomain: 'clone-406a1.firebaseapp.com',
  projectId: 'clone-406a1',
  storageBucket: 'clone-406a1.appspot.com',
  messagingSenderId: '936765990730',
  appId: '1:936765990730:web:6407390d86e8e11a2c43b3',
  measurementId: 'G-ZM45L81M9X',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
