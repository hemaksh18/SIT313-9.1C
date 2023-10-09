import React, { useContext, useState, useEffect } from 'react';
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword,  signOut, signInWithEmailAndPassword } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function Authent({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password); 
  }

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  async function logout() {
    try {
      await signOut(auth);
      console.log('Logout successful'); 
      navigate('/'); 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setloading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}