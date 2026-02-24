import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user' // Default role
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // This updates the 'user' state in App.jsx
    const loggedInUser = { 
      email: formData.email, 
      role: formData.role 
    };
    
    setUser(loggedInUser);

    // Navigate to the specific portal based on selection
    navigate(`/${formData.role}-portal`);
  };

  // Inline styles for guaranteed visibility
  const boxStyle = {
    maxWidth: '400px', margin: '100px auto', padding: '30px',
    backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };

  const inputStyle = {
    width: '100%', padding: '12px', margin: '10px 0',
    border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box'
  };

  return (
    <div style={boxStyle}>
      <h2 style={{color: '#2563eb'}}>Login to MyService</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" placeholder="Email Address" required style={inputStyle}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input 
          type="password" placeholder="Password" required style={inputStyle}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <label style={{display: 'block', textAlign: 'left', fontSize: '14px', marginTop: '10px'}}>Login as:</label>
        <select 
          style={inputStyle} 
          value={formData.role}
          onChange={(e) => setFormData({...formData, role: e.target.value})}
        >
          <option value="user">User / Customer</option>
          <option value="professional">Professional</option>
          <option value="admin">Platform Admin</option>
          <option value="support">Customer Support</option>
        </select>
        
        <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '20px'}}>
          Enter Dashboard
        </button>
      </form>
      <p style={{marginTop: '20px', fontSize: '14px'}}>
        New user? <Link to="/register" style={{color: '#2563eb', fontWeight: 'bold'}}>Create an Account</Link>
      </p>
    </div>
  );
};

export default Login;