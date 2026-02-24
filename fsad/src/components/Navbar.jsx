import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Clears the user state
    navigate('/'); // Redirects to Login page
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-tight">ServicePlatform</h1>
      
      <div className="flex items-center gap-6">
        <span className="text-sm bg-blue-700 px-3 py-1 rounded">
          Logged in as: <strong>{user?.role}</strong>
        </span>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-sm font-bold transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;