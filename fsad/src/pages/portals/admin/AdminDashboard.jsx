import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');

  // --- ADMIN STYLES (Elite SaaS Aesthetic) ---
  const s = {
    wrapper: { width: '100vw', minHeight: '100vh', backgroundColor: '#F8F9FD', margin: 0, padding: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" },
    navbar: { height: '85px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 60px', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 100 },
    container: { maxWidth: '1400px', margin: '0 auto', padding: '40px' },
    cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' },
    glassCard: { backgroundColor: '#FFFFFF', padding: '25px', borderRadius: '24px', border: '1px solid #F1F5F9', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' },
    navLink: (active) => ({ color: active ? '#6366F1' : '#64748B', fontWeight: '700', cursor: 'pointer', fontSize: '14px', padding: '10px 0', borderBottom: active ? '3px solid #6366F1' : 'none' }),
    btnIndigo: { background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '12px', fontWeight: '800', cursor: 'pointer' },
    statusIndicator: (color) => ({ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: color, display: 'inline-block', marginRight: '8px' })
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Security Hub':
        return (
          <div style={s.glassCard}>
            <h3 style={{ marginBottom: '20px' }}>Security Alerts & Compliance</h3>
            <div style={{ padding: '15px', backgroundColor: '#FEF2F2', borderRadius: '12px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#EF4444', fontWeight: '700' }}>⚠️ Suspicious login attempt from IP: 192.168.1.45</span>
              <button style={{ background: 'none', border: 'none', color: '#EF4444', fontWeight: '800', cursor: 'pointer' }}>Block IP</button>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#FFFBEB', borderRadius: '12px' }}>
              <span style={{ color: '#D97706', fontWeight: '700' }}>Pending Professional Verification: Dasari TejoKiran</span>
            </div>
          </div>
        );
      case 'Platform Management':
        return (
          <div style={s.glassCard}>
            <h3>Service Categories & Control</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
              <div style={{ padding: '20px', border: '1px solid #F1F5F9', borderRadius: '16px' }}>
                <h4>Management Services</h4>
                <p style={{ color: '#64748B', fontSize: '12px' }}>Active Specialists: 42</p>
                <button style={{ color: '#6366F1', border: 'none', background: 'none', fontWeight: '700', padding: 0 }}>Edit Rules</button>
              </div>
              <div style={{ padding: '20px', border: '1px solid #F1F5F9', borderRadius: '16px' }}>
                <h4>Design Services</h4>
                <p style={{ color: '#64748B', fontSize: '12px' }}>Active Specialists: 128</p>
                <button style={{ color: '#6366F1', border: 'none', background: 'none', fontWeight: '700', padding: 0 }}>Edit Rules</button>
              </div>
            </div>
          </div>
        );
      case 'Reports':
        return (
          <div style={s.glassCard}>
            <h3>Revenue & Growth Reports</h3>
            <div style={{ height: '250px', display: 'flex', alignItems: 'flex-end', gap: '10px', marginTop: '20px', background: '#F8F9FD', padding: '20px', borderRadius: '20px' }}>
              {[30, 50, 45, 80, 60, 95, 70].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: '#6366F1', borderRadius: '6px' }}></div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <>
            <div style={s.cardGrid}>
              <div style={s.glassCard}><p style={{ fontSize: '12px', color: '#64748B' }}>TOTAL USERS</p><h2>14,282</h2></div>
              <div style={s.glassCard}><p style={{ fontSize: '12px', color: '#64748B' }}>ACTIVE SERVICES</p><h2>32</h2></div>
              <div style={s.glassCard}><p style={{ fontSize: '12px', color: '#64748B' }}>PLATFORM REVENUE</p><h2 style={{ color: '#10B981' }}>$124,500</h2></div>
              <div style={s.glassCard}><p style={{ fontSize: '12px', color: '#64748B' }}>SECURITY STATUS</p><h2 style={{ color: '#6366F1' }}>Secure</h2></div>
            </div>
            <div style={s.glassCard}>
              <h3>Recent Platform Activity</h3>
              <p style={{ color: '#64748B', fontSize: '14px' }}><span style={s.statusIndicator('#10B981')}></span>New professional account verified</p>
              <p style={{ color: '#64748B', fontSize: '14px' }}><span style={s.statusIndicator('#6366F1')}></span>System backup completed successfully</p>
            </div>
          </>
        );
    }
  };

  return (
    <div style={s.wrapper}>
      <header style={s.navbar}>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <h2 style={{ color: '#6366F1', fontWeight: '900' }}>ADMIN<span style={{ color: '#1E293B' }}>CORE</span></h2>
          <nav style={{ display: 'flex', gap: '25px' }}>
            {['Overview', 'Security Hub', 'Platform Management', 'Reports'].map(tab => (
              <span key={tab} onClick={() => setActiveTab(tab)} style={s.navLink(activeTab === tab)}>{tab}</span>
            ))}
          </nav>
        </div>
        <button onClick={() => { setUser(null); navigate('/'); }} style={{ ...s.btnIndigo, background: '#FEE2E2', color: '#EF4444' }}>Logout</button>
      </header>

      <div style={s.container}>
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontWeight: '900' }}>Platform Overview 🛡️</h1>
          <p style={{ color: '#64748B' }}>Welcome back, Admin. System monitoring is active.</p>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;