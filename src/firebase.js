import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyC5cOJ9LDIIDa37_BuqzUo8B6Bl9kYc6sU",
    authDomain: "netflix-clone-8458a.firebaseapp.com",
    projectId: "netflix-clone-8458a",
    storageBucket: "netflix-clone-8458a.firebasestorage.app",
    messagingSenderId: "764022159409",
    appId: "1:764022159409:web:6ac2e021fcf418d26d7d10",
    measurementId: "G-B713C1VRZ9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;    
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            authProvider: "local",
            email
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code);
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code);
    }
}

const logout = ()=>{
    signOut(auth);
}

export{auth, db, login, signup, logout}