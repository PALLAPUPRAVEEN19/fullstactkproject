import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const sidebarStyle = {
    width: '260px',
    height: '100vh',
    backgroundColor: '#0f172a',
    color: 'white',
    padding: '30px 20px',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '4px 0 10px rgba(0,0,0,0.1)',
    zIndex: 1000
  };

  const linkStyle = {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    textAlign: 'left',
    padding: '12px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '8px',
    marginBottom: '10px',
    transition: '0.3s'
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={{ color: '#3b82f6', marginBottom: '40px' }}>ServicePlatform</h2>
      <nav style={{ flex: 1 }}>
        <button onClick={() => navigate(`/${user.role}-portal`)} style={{...linkStyle, color: 'white'}}>🏠 Dashboard</button>
        {user.role === 'admin' && <button style={linkStyle}>👥 User Roles</button>}
        {user.role === 'admin' && <button style={linkStyle}>🛡️ Security Hub</button>}
      </nav>
      <button onClick={handleLogout} style={{ ...linkStyle, color: '#f87171' }}>🚪 Logout</button>
    </div>
  );
};

// THIS IS THE LINE THAT WAS MISSING
export default Sidebar;