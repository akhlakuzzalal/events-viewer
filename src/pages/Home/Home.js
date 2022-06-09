import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Home = () => {
  const navigate = useNavigate();
  const { logout, user, isLoading } = useAuth();
  console.log('hello world');
  return (
    <div>
      {isLoading ? (
        <>
          <div>Please wait</div>
        </>
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center justify-between mx-10 my-6">
            <div>
              <h2 className="text-3xl font-bold text-green-400">
                Welcome to Event Viewer
              </h2>
            </div>
            <button
              className="px-4 py-2 rounded-md bg-red-500 text-white"
              onClick={() => {
                logout();
                navigate('/');
              }}
            >
              LogOut
            </button>
          </div>
          {/* popUp Btn */}
          <div className="h-[calc(100vh-200px)] flex items-center justify-center">
            <div>
              <h4 className="text-xl font-semibold text-slate-700 text-center my-6">
                For Your events please take permission First
              </h4>
              <div className="flex  justify-center">
                <button className="px-4 py-2 rounded-md bg-green-500 text-white w-28">
                  Permission
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
