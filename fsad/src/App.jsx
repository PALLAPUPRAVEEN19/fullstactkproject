import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Portal Pages
import AdminDashboard from "./pages/portals/admin/AdminDashboard";
import ProfDashboard from "./pages/portals/professional/ProfDashboard";
import UserDashboard from "./pages/portals/user/UserDashboard";
import SupportDashboard from "./pages/portals/support/SupportDashboard";

/**
 * Main Application Component
 * Handles Global Navigation, Role-Based Access Control, and SaaS Styling
 */
function App() {
  // Global state to store the logged-in user object { username, role, info }
  const [user, setUser] = useState(null);

  // High-end SaaS Background and Container Style
  const appContainerStyle = {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#F8FAFF", // "Fruitful" light background
    margin: 0,
    padding: 0,
    overflowX: "hidden",
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  };

  return (
    <div style={appContainerStyle}>
      <Router>
        <Routes>
          {/* ================= 1. AUTHENTICATION ROUTES ================= */}
          {/* Login: If user is logged in, redirect them to their specific portal */}
          <Route
            path="/"
            element={
              !user ? (
                <Login setUser={setUser} />
              ) : (
                <Navigate to={`/${user.role}-portal`} replace />
              )
            }
          />

          {/* Registration: Collects General Info and User Details */}
          <Route path="/register" element={<Register />} />


          {/* ================= 2. PROTECTED PORTAL ROUTES ================= */}
          {/* All portal routes verify the user.role before granting access */}

          {/* Admin Portal: Handles Platform Management & Security */}
          <Route
            path="/admin-portal"
            element={
              user?.role === "admin" ? (
                <AdminDashboard user={user} setUser={setUser} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* User Portal: For Specialist Discovery and Hiring */}
          <Route
            path="/user-portal"
            element={
              user?.role === "user" ? (
                <UserDashboard user={user} setUser={setUser} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Professional Portal: For Service Listings & KYC Verification */}
          <Route
            path="/professional-portal"
            element={
              user?.role === "professional" ? (
                <ProfDashboard user={user} setUser={setUser} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Support Portal: Handles Help Desk & Disputes */}
          <Route
            path="/support-portal"
            element={
              user?.role === "support" ? (
                <SupportDashboard user={user} setUser={setUser} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />


          {/* ================= 3. FALLBACK / ERROR ROUTE ================= */}
          {/* Redirects any unknown URL back to the home/login page */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;