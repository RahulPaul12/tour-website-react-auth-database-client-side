import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';
const initalizeAuthenction = ()=> {
    initializeApp(firebaseConfig);
}

export default initalizeAuthenction;