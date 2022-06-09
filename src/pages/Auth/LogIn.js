import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const redirect_uri = location?.state?.form || '/';

  const { setAuthError, processSignInWithGoogle, setIsLoading } = useAuth();

  const handleGoogleLogin = () => {
    processSignInWithGoogle()
      .then(() => {
        navigate(redirect_uri);
        setIsLoading(false);
      })
      .catch((error) => setAuthError(error.message));
  };

  return (
    <div
      style={{ minHeight: 'calc(100vh - 100px)' }}
      className="flex flex-col justify-center items-center"
    >
      <div className="w-full md:w-2/3 space-y-6 text-center px-2 md:px-0">
        <p className="text-6xl font-semibold bg-cyan-600 text-white -mt-8">
          Events Viewer
        </p>
        <p className="text-lg">Happy to see you again</p>

        <button
          className="btn block mx-auto text-xl md:text-2xl"
          onClick={handleGoogleLogin}
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-1" />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
