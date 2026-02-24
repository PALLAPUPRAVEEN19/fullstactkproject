import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfDashboard = ({ user, setUser }) => {
  const navigate = useNavigate();
  // Using state to control which "View" is active within the dashboard
  const [activeView, setActiveView] = useState('Overview');

  // --- MODERN DRIBBBLE/SAAS STYLES ---
  const s = {
    wrapper: { width: '100vw', minHeight: '100vh', backgroundColor: '#F8FAFF', fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0, padding: 0 },
    navbar: { height: '90px', backgroundColor: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 60px', borderBottom: '1px solid #EEF2F6', position: 'sticky', top: 0, zIndex: 100 },
    container: { maxWidth: '1400px', margin: '0 auto', padding: '40px' },
    cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '40px' },
    glassCard: (clickable) => ({ 
      backgroundColor: '#FFF', padding: '32px', borderRadius: '28px', 
      boxShadow: '0 10px 40px rgba(0,0,0,0.03)', border: '1px solid #F1F5F9', 
      cursor: clickable ? 'pointer' : 'default', transition: '0.3s transform ease' 
    }),
    navLink: (active) => ({ color: active ? '#7C3AED' : '#64748B', fontWeight: '700', cursor: 'pointer', borderBottom: active ? '3px solid #7C3AED' : 'none', padding: '10px 0' }),
    btnPurple: { background: 'linear-gradient(135deg, #7C3AED, #A78BFA)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '14px', fontWeight: '800', cursor: 'pointer' }
  };

  return (
    <div style={s.wrapper}>
      {/* 1. SaaS TOP NAVIGATION */}
      <header style={s.navbar}>
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
          <h2 style={{ color: '#7C3AED', fontWeight: '900', fontSize: '26px' }}>SERVICE<span style={{color: '#1E293B'}}>PRO</span></h2>
          <nav style={{ display: 'flex', gap: '30px' }}>
            {['Overview', 'My Jobs', 'Earnings', 'Reviews'].map(tab => (
              <span key={tab} onClick={() => setActiveView(tab)} style={s.navLink(activeView === tab)}>{tab}</span>
            ))}
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
           <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontWeight: '800', fontSize: '14px' }}>{user?.fullName || "Professional"}</p>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748B' }}>Verified Provider</p>
           </div>
           <button onClick={() => { setUser(null); navigate('/'); }} style={{ ...s.btnPurple, background: '#FEE2E2', color: '#EF4444', boxShadow: 'none', padding: '10px 20px' }}>Logout</button>
        </div>
      </header>

      <div style={s.container}>
        
        {/* VIEW: MAIN DASHBOARD OVERVIEW */}
        {activeView === 'Overview' && (
          <>
            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#1E293B' }}>Good Morning, Pro! ⚡</h1>
              <p style={{ color: '#64748B' }}>Your profile has 1,842 new views this week.</p>
            </div>
            <div style={s.cardGrid}>
              <div onClick={() => setActiveView('Earnings')} style={s.glassCard(true)}>
                <p style={{ fontSize: '12px', fontWeight: '800', color: '#64748B', letterSpacing: '1px' }}>TOTAL EARNINGS</p>
                <h1 style={{ color: '#10B981', margin: '15px 0', fontSize: '36px' }}>$4,250.00</h1>
                <p style={{ color: '#10B981', fontWeight: '700', fontSize: '13px' }}>View revenue reports →</p>
              </div>
              <div onClick={() => setActiveView('My Jobs')} style={s.glassCard(true)}>
                <p style={{ fontSize: '12px', fontWeight: '800', color: '#64748B', letterSpacing: '1px' }}>JOBS COMPLETED</p>
                <h1 style={{ margin: '15px 0', fontSize: '36px' }}>128</h1>
                <p style={{ color: '#7C3AED', fontWeight: '700', fontSize: '13px' }}>Manage assignments →</p>
              </div>
              <div onClick={() => setActiveView('Reviews')} style={s.glassCard(true)}>
                <p style={{ fontSize: '12px', fontWeight: '800', color: '#64748B', letterSpacing: '1px' }}>AVG. RATING</p>
                <h1 style={{ margin: '15px 0', fontSize: '36px' }}>⭐ 4.9</h1>
                <p style={{ color: '#64748B', fontWeight: '700', fontSize: '13px' }}>See client feedback →</p>
              </div>
            </div>
          </>
        )}

        {/* VIEW: MY JOBS (Active Bookings) */}
        {activeView === 'My Jobs' && (
          <div style={s.glassCard(false)}>
            <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '25px' }}>Current Job Queue</h3>
            <div style={{ padding: '24px', background: '#F8FAFF', borderRadius: '20px', border: '1px solid #EEF2F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ background: '#F5F3FF', color: '#7C3AED', padding: '4px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: '800' }}>In Progress</span>
                <h4 style={{ margin: '10px 0 5px' }}>Home Electrical System Repair</h4>
                <p style={{ margin: 0, color: '#64748B', fontSize: '14px' }}>Client: Sarah Connor • Location: New York</p>
              </div>
              <button style={s.btnPurple}>Complete Job</button>
            </div>
          </div>
        )}

        {/* VIEW: EARNINGS ANALYTICS */}
        {activeView === 'Earnings' && (
          <div style={s.glassCard(false)}>
            <h3 style={{ fontSize: '22px', fontWeight: '800' }}>Platform Revenue Insights</h3>
            <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '15px', padding: '40px', background: '#F9FAFF', borderRadius: '24px', marginTop: '20px' }}>
              {[60, 40, 90, 70, 100, 55, 85].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: 'linear-gradient(to top, #10B981, #34D399)', borderRadius: '10px' }}></div>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '20px', color: '#64748B', fontWeight: '600' }}>Your weekly revenue has grown by 18%.</p>
          </div>
        )}

        {/* VIEW: REVIEWS FEEDBACK */}
        {activeView === 'Reviews' && (
          <div style={s.glassCard(false)}>
            <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '25px' }}>Client Reviews</h3>
            <div style={{ padding: '20px', borderBottom: '1px solid #F1F5F9' }}>
              <p style={{ fontWeight: '700', margin: '0 0 5px 0', color: '#1E293B' }}>"Highly professional and completed the task ahead of schedule!" ⭐⭐⭐⭐⭐</p>
              <p style={{ fontSize: '12px', color: '#64748B' }}>- John Doe • 3 days ago</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProfDashboard;