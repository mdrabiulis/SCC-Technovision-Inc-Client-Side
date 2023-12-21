import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../FirebaseConfig";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);







    const createUserWithEmailandPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };


      const loginuserEmailandPass =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
      }

      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };

      const ignOutusers = () => {
        return signOut(auth);
      };



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          unSubscribe();
        };
      }, []);






const userInfo={
    user,
    loading,
    createUserWithEmailandPass,
    loginuserEmailandPass,
    updateUserProfile,
    ignOutusers
}






    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
  };
export default AuthProvider;