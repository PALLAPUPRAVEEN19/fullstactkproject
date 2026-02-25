import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import { userService } from "../../services/userservice";
import './Login.css';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Call backend service
      const user = await userService.login(formData.email, formData.password);
      
      // 2. Normalize role (e.g., "Admin" -> "admin")
      const role = user.role.toLowerCase();
      const loggedInUser = { ...user, role };

      // 3. Update global state and local storage
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));

      // 4. Navigate to the specific portal
      navigate(`/${role}-portal`);

    } catch (error) {
      console.error("Login Error:", error);
      alert("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* Background Slides Section - Controlled by CSS animations */}
      <div className="background-slides">
        <div className="slide slide-1"></div>
        <div className="slide slide-2"></div>
        <div className="slide slide-3"></div>
      </div>

      <div className="auth-container">
        <div className="auth-card">
          {/* Brand Header */}
          <div className="auth-logo-box">
            <Sparkles size={28} color="white" fill="white" />
          </div>
          <h1 className="brand-name">ServicePro</h1>
          <p className="subtitle">Welcome back</p>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="input-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail className="field-icon" size={18} />
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock className="field-icon" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Footer Link */}
          <p className="auth-footer">
            Don't have an account?{" "}
            <Link to="/register" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;