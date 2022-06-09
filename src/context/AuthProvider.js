import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

const AuthContext = createContext(null); //should be exported otherwise we can't use it in authprovider hook

const AuthProvider = ({ children }) => {
  const allContexts = useFirebase();
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
