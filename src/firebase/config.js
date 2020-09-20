import * as firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDjp6b20j5eaHMSzJ2pIIhUHlsjjO_T2OY",
  authDomain: "react-native-chat-faf6f.firebaseapp.com",
  databaseURL: "https://react-native-chat-faf6f.firebaseio.com",
  projectId: "react-native-chat-faf6f",
  storageBucket: "react-native-chat-faf6f.appspot.com",
  messagingSenderId: "218718312179",
  appId: "1:218718312179:web:d32bdf88f7ee912cdfc986",
  measurementId: "G-8R4GVNDFK8"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
//firebase.analytics();

