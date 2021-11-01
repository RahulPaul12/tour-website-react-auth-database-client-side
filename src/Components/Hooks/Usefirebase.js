import { getAuth, signInWithPopup, GoogleAuthProvider, signOut , onAuthStateChanged } from "firebase/auth";
import  { useEffect, useState } from 'react';
import initalizeAuthenction from "../../Firebase/firebase.init";

initalizeAuthenction();
const Usefirebase = () => {
    const [user,setUser] = useState({});
    const [isloading , setisloading] = useState(true);
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    const signinusingGoogle = ()=>{
       return signInWithPopup(auth,googleprovider)
        .finally(()=>{setisloading(false)});
    }

    const logout = ()=>{
        setisloading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setisloading(false));
    }

    // user state changed

    useEffect(()=>{
        const unsubscribed =   onAuthStateChanged(auth, user=>{
             if(user){
                 setUser(user);
             }
             else{
                 setUser({})
             }
             setisloading(false);
         });
         return ()=> unsubscribed;
     }, [])

     

    return {
        user,
        isloading,
        signinusingGoogle,
        logout            
    }
}

export default Usefirebase;