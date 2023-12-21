import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const allkey = import.meta.env;
console.log(allkey.VITE_APIKEY);

const firebaseConfig = {
  apiKey: allkey.VITE_APIKEY,
  authDomain: allkey.VITE_AUTHDOMAIN,
  projectId: allkey.VITE_PROJECTID,
  storageBucket: allkey.VITE_STORAGEBUCKET,
  messagingSenderId: allkey.VITE_MESSAGINGSENDERID,
  appId: allkey.VITE_APPID
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
