import React from 'react';
import { createContext, useState} from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "./../Firebase/Firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);

  }

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

 


  const authInfo = { user, createUser, logIn, loginWithGoogle };
  

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );


};

export default UserContext;