import React from 'react';
import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { Navigate, useLocation } from "react-router-dom";
import app from "./../Firebase/Firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
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

 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser);
     setLoading(false);
     console.log("auth stste Change ", currentUser);
   });
   return () => {
     unsubscribe();
   };
 }, []);



  const authInfo = { user, createUser, logIn, loginWithGoogle, loading };
  

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );


};

export default UserContext;