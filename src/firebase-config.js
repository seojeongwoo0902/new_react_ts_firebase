import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
console.log(process.env.REACT_APP_FIREBASE_APIKEY);
console.log(process.env.REACT_APP_FIREBASE_AUTHDOMAIN);
console.log(process.env.REACT_APP_FIREBASE_PROJECTID);
console.log(process.env.REACT_APP_FIREBASE_STORAGEBUCKET);
console.log((process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID));
console.log(process.env.REACT_APP_FIREBASE_APIID);

const firebaseConfig = {
  
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY, //"AIzaSyC6XquYbAr4HlUxqGBkq8poXJGJzjNYUQA"
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,//"react-typescript-firebas-493db.firebaseapp.com"
  databaseUrl:process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID, //react-typescript-firebas-493db"
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET,//"react-typescript-firebas-493db.appspot.com"
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,//"988726128714"
  appId:process.env.REACT_APP_FIREBASE_APIID,//"1:988726128714:web:8324a9f01cdfb9691076b3"
  measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
