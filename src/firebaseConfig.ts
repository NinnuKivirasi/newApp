import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "newapp-5549f.firebaseapp.com",
  projectId: "newapp-5549f",
  storageBucket: "newapp-5549f.firebasestorage.app",
  messagingSenderId: "510002371647",
  appId: "1:510002371647:web:e331d0686a9767c17aec8a"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


export async function loginUser(username: string, password: string) {
    const email = `${username}@codedamn.com`

    try{
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
        return true
    } 
    catch (error) {
        console.log(error)
        return false
    }    
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@codedamn.com`

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        console.log(res)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}


