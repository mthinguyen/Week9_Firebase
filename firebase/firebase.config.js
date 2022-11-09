import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyChQPXT5GCsoVZR-hAvZ0ctllZxTsj9bmU",
    authDomain: "login-with-firebase-week-9.firebaseapp.com",
    projectId: "login-with-firebase-week-9",
    storageBucket: "login-with-firebase-week-9.appspot.com",
    messagingSenderId: "58024053801",
    appId: "1:58024053801:web:f9279ccd1e629217a3a038"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);