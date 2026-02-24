import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'user' // Default role
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered User:", formData);
    alert("Registration Successful! Please Login.");
    navigate('/'); // Send back to login after registration
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl border">
        <h2 className="text-3xl font-bold text-center text-gray-800">Create Account</h2>
        <p className="text-center text-gray-500 mb-6">Join the FSAD-PS18 Service Platform</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input 
              type="text" required 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" 
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input 
              type="email" required 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input 
              type="password" required 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" 
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">I want to join as:</label>
            <select 
              className="w-full p-3 border rounded-lg bg-white"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <option value="user">Customer (Find Services)</option>
              <option value="professional">Professional (Provide Services)</option>
              <option value="support">Customer Support</option>
            </select>
          </div>

          <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account? <Link to="/" className="text-blue-600 font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;