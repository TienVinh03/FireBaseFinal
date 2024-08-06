import  firebase  from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAVJbfScXTYDU7bRu2-8DZg4Ngkx_ZCmqQ",
  authDomain: "fir-532b1.firebaseapp.com",
  projectId: "fir-532b1",
  storageBucket: "fir-532b1.appspot.com",
  messagingSenderId: "371805304155",
  appId: "1:371805304155:android:caa69eb468b7981e5ed67e",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firestore };