import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const navigate = useNavigate();
  const { logout, user, isLoading } = useAuth();
  return (
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
  );
};

export default Header;
