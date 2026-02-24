import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Progress'); // Navbar: Specialists, Recommendations, Progress
  const [activeCategory, setActiveCategory] = useState('Design'); // Sub-nav: Management, Design, etc.
  const [searchTerm, setSearchTerm] = useState('');

  // 1. DATA: List of Professionals with Ratings and Demand
  const allSpecialists = [
    { id: 1, name: "John S.", role: "Senior Designer", category: "Design", points: 78, rating: 4.9, demand: "High", skills: [{ n: "Visual design", p: 90, c: "#FB923C" }, { n: "Interaction", p: 65, c: "#38BDF8" }], img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Meera S.", role: "Middle Designer", category: "Design", points: 65, rating: 4.7, demand: "Medium", skills: [{ n: "Animation", p: 85, c: "#F472B6" }, { n: "Prototyping", p: 40, c: "#818CF8" }], img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Arun K.", role: "Product Manager", category: "Management", points: 82, rating: 4.8, demand: "High", skills: [{ n: "Strategy", p: 95, c: "#10B981" }, { n: "Agile", p: 80, c: "#6366F1" }], img: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "Sara L.", role: "DevOps Engineer", category: "Development", points: 88, rating: 4.9, demand: "High", skills: [{ n: "Cloud", p: 92, c: "#06B6D4" }, { n: "Docker", p: 88, c: "#3B82F6" }], img: "https://i.pravatar.cc/150?u=4" },
  ];

  // 2. LOGIC: Filter by Category and Search Term
  const filteredPros = allSpecialists.filter(pro => 
    pro.category === activeCategory && 
    (pro.name.toLowerCase().includes(searchTerm.toLowerCase()) || pro.role.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const s = {
    wrapper: { width: '100vw', minHeight: '100vh', backgroundColor: '#F0F2F9', fontFamily: "'Plus Jakarta Sans', sans-serif" },
    topNav: { height: '80px', backgroundColor: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', borderBottom: '1px solid #E2E8F0' },
    categoryBar: { backgroundColor: '#FFFBEB', display: 'flex', padding: '12px 40px', gap: '30px', borderBottom: '1px solid #FEF3C7' },
    container: { maxWidth: '1400px', margin: '0 auto', padding: '40px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '2px', backgroundColor: '#E2E8F0' },
    proCard: { backgroundColor: '#FFF', padding: '30px', display: 'flex', gap: '25px' },
    tag: (bg, text) => ({ padding: '4px 10px', borderRadius: '8px', fontSize: '10px', fontWeight: '800', backgroundColor: bg, color: text, textTransform: 'uppercase' })
  };

  return (
    <div style={s.wrapper}>
      {/* 3. MAIN NAVBAR (Wired to activeTab) */}
      <header style={s.topNav}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <h2 style={{ color: '#0F172A', fontWeight: '900' }}>SERVICE<span style={{color:'#F59E0B'}}>HUB</span></h2>
          <nav style={{ display: 'flex', gap: '20px', fontSize: '14px', fontWeight: '700' }}>
            {['Specialists', 'Recommendations', 'Progress'].map(tab => (
              <span key={tab} onClick={() => setActiveTab(tab)} style={{ cursor: 'pointer', color: activeTab === tab ? '#0F172A' : '#94A3B8', borderBottom: activeTab === tab ? '2px solid #F59E0B' : 'none' }}>{tab}</span>
            ))}
          </nav>
        </div>
        <input 
          placeholder="Filter by role or name..." 
          style={{ padding: '10px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', width: '300px' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => { setUser(null); navigate('/'); }} style={{ background: '#0F172A', color: 'white', padding: '10px 20px', borderRadius: '12px', border: 'none', fontWeight: 'bold' }}>Logout</button>
      </header>

      {/* 4. CATEGORY SUB-NAV (Wired to activeCategory) */}
      <div style={s.categoryBar}>
        {['Management', 'Design', 'Development', 'Marketing'].map(cat => (
          <span key={cat} onClick={() => setActiveCategory(cat)} style={{ cursor: 'pointer', fontWeight: '700', fontSize: '13px', color: activeCategory === cat ? '#D97706' : '#92400E' }}>
            {activeCategory === cat ? '● ' : ''}{cat}
          </span>
        ))}
      </div>

      <div style={s.container}>
        <div style={s.grid}>
          {filteredPros.length > 0 ? filteredPros.map((pro) => (
            <div key={pro.id} style={s.proCard}>
              <div style={{ textAlign: 'center', width: '120px' }}>
                <img src={pro.img} style={{ width: '80px', borderRadius: '50%' }} alt="pro" />
                <h3 style={{ margin: '15px 0 5px' }}>{pro.name}</h3>
                <p style={{ fontSize: '12px', color: '#64748B' }}>{pro.role}</p>
                <div style={{ marginTop: '10px' }}>
                  <span style={s.tag('#FEF3C7', '#D97706')}>⭐ {pro.rating}</span>
                  <p style={{ fontSize: '10px', color: '#94A3B8', marginTop: '5px' }}>Demand: {pro.demand}</p>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '11px', fontWeight: '800', color: '#94A3B8' }}>KEY COMPETENCY</p>
                {pro.skills.map((skill, i) => (
                  <div key={i} style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '600' }}><span>{skill.n}</span></div>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#F1F5F9', borderRadius: '10px', marginTop: '8px' }}>
                      <div style={{ width: `${skill.p}%`, height: '100%', backgroundColor: skill.c, borderRadius: '10px' }}></div>
                    </div>
                  </div>
                ))}
                <button onClick={() => navigate(`/hire/${pro.id}`)} style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #E2E8F0', background: 'none', fontWeight: 'bold', cursor: 'pointer' }}>View Full Profile</button>
              </div>
            </div>
          )) : (
            <div style={{ padding: '60px', textAlign: 'center', width: '100%', gridColumn: 'span 2' }}>
              <h3>No {activeCategory} specialists found matching "{searchTerm}"</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;