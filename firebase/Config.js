import firebase from 'firebase/compat';
import "firebase/auth";

export const firebaseConfig = ({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export { firebase };
export const TODOS_REF = '/todos/';
export const USERS_REF = '/users/';