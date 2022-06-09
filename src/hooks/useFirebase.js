import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initFirebase from '../firebase/firebaseInit';

// initialize firebase app
initFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true); // user using the login functionality
  const [authError, setAuthError] = useState('');

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const processSignInWithGoogle = (navigate) => {
    setIsLoading(true); // user trying to log with google

    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { user } = result;
        console.log('result---->', result);
        console.log('user---->', user);
        setUser({
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
        });
      })
      .catch((error) => setAuthError(error.message));
  };

  // change the user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false); // as the user state changed so we are not in loading state
    });
    return () => unsubscribed;
  }, [auth]);

  //process user logout
  const logout = () => {
    setIsLoading(true);
    return signOut(auth)
      .then(() => {})
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    setIsLoading,
    setAuthError,
    authError,
    processSignInWithGoogle,
    logout,
  };
};

export default useFirebase;
