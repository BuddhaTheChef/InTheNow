import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "{ENTER API KEY}",
  authDomain: "eventnow-60c55.firebaseapp.com",
  databaseURL: "https://eventnow-60c55.firebaseio.com",
  projectId: "eventnow-60c55",
  storageBucket: "eventnow-60c55.appspot.com",
  messagingSenderId: "1041155611742"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
