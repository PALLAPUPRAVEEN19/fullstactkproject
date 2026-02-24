import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SupportDashboard = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("Tickets"); // Controls the Navbar options
  const [filter, setFilter] = useState("All");

  // Mock Data for high-end features
  const tickets = [
    { id: "T-101", user: "User123", issue: "Payment failed", status: "Open", priority: "High", time: "2m ago" },
    { id: "T-102", user: "Pro_Ravi", issue: "Profile not updating", status: "In Progress", priority: "Medium", time: "15m ago" },
    { id: "T-103", user: "User456", issue: "Booking cancelled", status: "Resolved", priority: "Low", time: "2h ago" },
  ];

  // --- DRIBBBLE PREMIUM INLINE STYLES ---
  const s = {
    wrapper: { width: '100vw', minHeight: '100vh', backgroundColor: '#F8F9FD', margin: 0, padding: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" },
    navbar: { height: '80px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 60px', borderBottom: '1px solid #E5EBF5', position: 'sticky', top: 0, zIndex: 100 },
    navLink: (active) => ({ padding: '10px 15px', cursor: 'pointer', fontWeight: '700', fontSize: '14px', color: active ? '#6366f1' : '#64748B', borderBottom: active ? '3px solid #6366f1' : 'none', transition: '0.2s' }),
    container: { maxWidth: '1400px', margin: '0 auto', padding: '40px' },
    glassCard: { backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '28px', border: '1px solid #F0F4F8', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' },
    btnPrimary: { background: 'linear-gradient(135deg, #6366f1, #a855f7)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '14px', fontWeight: '700', cursor: 'pointer' },
    pill: (status) => ({
      padding: '6px 14px', borderRadius: '10px', fontSize: '11px', fontWeight: '800', 
      backgroundColor: status === "Open" ? "#FEE2E2" : status === "In Progress" ? "#FFFBEB" : "#ECFDF5",
      color: status === "Open" ? "#EF4444" : status === "In Progress" ? "#D97706" : "#10B981",
      textTransform: 'uppercase'
    })
  };

  return (
    <div style={s.wrapper}>
      {/* 1. FUNCTIONAL NAVBAR */}
      <header style={s.navbar}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
          <h2 style={{ color: '#6366f1', fontWeight: '900', fontSize: '24px' }}>SUPPORT<span style={{color: '#1E293B'}}>DESK</span></h2>
          <nav style={{ display: 'flex', gap: '20px' }}>
            {['Tickets', 'Analytics', 'Customer Chat'].map(item => (
              <span key={item} onClick={() => setActiveView(item)} style={s.navLink(activeView === item)}>{item}</span>
            ))}
          </nav>
        </div>
        <button onClick={() => { setUser(null); navigate('/'); }} style={{ ...s.btnPrimary, background: '#FEE2E2', color: '#EF4444', boxShadow: 'none' }}>Logout</button>
      </header>

      <div style={s.container}>
        
        {/* VIEW 1: TICKETS (Main Feature) */}
        {activeView === 'Tickets' && (
          <div>
            <div style={{ marginBottom: '30px' }}>
              <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#1E293B' }}>Ticket Overview 🎫</h1>
              <p style={{ color: '#64748B' }}>Real-time management of platform inquiries and compliance disputes.</p>
            </div>

            <div style={s.glassCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', alignItems: 'center' }}>
                <h3 style={{ fontWeight: '800' }}>Live Support Queue</h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {['All', 'Open', 'In Progress', 'Resolved'].map(t => (
                    <button key={t} onClick={() => setFilter(t)} style={{ background: filter === t ? '#F1F5F9' : 'none', border: 'none', padding: '8px 16px', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', color: filter === t ? '#6366f1' : '#64748B' }}>{t}</button>
                  ))}
                </div>
              </div>

              {tickets.filter(t => filter === 'All' || t.status === filter).map(ticket => (
                <div key={ticket.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #F8FAFC' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <span style={{ fontWeight: '900', color: '#1E293B' }}>{ticket.id}</span>
                      <span style={s.pill(ticket.status)}>{ticket.status}</span>
                    </div>
                    <h4 style={{ margin: '8px 0 4px', fontSize: '16px' }}>{ticket.issue}</h4>
                    <p style={{ margin: 0, color: '#94A3B8', fontSize: '13px' }}>User: {ticket.user} • {ticket.time}</p>
                  </div>
                  <button style={s.btnPrimary}>Resolve</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: ANALYTICS (Fruitful Visualization) */}
        {activeView === 'Analytics' && (
          <div style={s.glassCard}>
            <h2 style={{ fontWeight: '800' }}>Platform Performance Reports</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '30px' }}>
              <div style={{ textAlign: 'center', padding: '30px', background: '#F9FAFF', borderRadius: '20px' }}>
                <h4 style={{ color: '#64748B' }}>Customer Satisfaction</h4>
                <h1 style={{ color: '#10B981', fontSize: '48px' }}>98%</h1>
              </div>
              <div style={{ textAlign: 'center', padding: '30px', background: '#F9FAFF', borderRadius: '20px' }}>
                <h4 style={{ color: '#64748B' }}>Avg Response Time</h4>
                <h1 style={{ color: '#6366f1', fontSize: '48px' }}>14m</h1>
              </div>
              <div style={{ textAlign: 'center', padding: '30px', background: '#F9FAFF', borderRadius: '20px' }}>
                <h4 style={{ color: '#64748B' }}>Resolution Rate</h4>
                <h1 style={{ color: '#F59E0B', fontSize: '48px' }}>92%</h1>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: CUSTOMER CHAT (Compliance & Support) */}
        {activeView === 'Customer Chat' && (
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '30px' }}>
            <div style={s.glassCard}>
              <h4 style={{ marginBottom: '20px' }}>Recent Conversations</h4>
              <div style={{ padding: '15px', background: '#EEF2FF', borderRadius: '15px', color: '#4338CA', fontWeight: '700' }}>User123 (Typing...)</div>
            </div>
            <div style={{ ...s.glassCard, height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
              <h3 style={{ color: '#94A3B8' }}>Select a user to begin live support session</h3>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default SupportDashboard;