import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userService } from "../../services/userservice";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "USER",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await userService.register(formData);

      console.log("Registered User:", response);

      alert("Registration Successful! Please Login.");
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration Failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
        }

        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          font-family: Arial, sans-serif;
        }

        .register-card {
          width: 100%;
          max-width: 420px;
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .register-title {
          font-size: 30px;
          font-weight: bold;
          text-align: center;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .register-subtitle {
          text-align: center;
          color: #64748b;
          margin-bottom: 25px;
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-group label {
          display: block;
          font-size: 14px;
          margin-bottom: 6px;
          color: #334155;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          outline: none;
          font-size: 14px;
          transition: 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }

        .register-btn {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .register-btn:hover {
          background: #1d4ed8;
        }

        .register-btn:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }

        .register-footer {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
        }

        .register-footer a {
          color: #2563eb;
          font-weight: bold;
          text-decoration: none;
        }

        .register-footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="register-container">
        <div className="register-card">

          <h2 className="register-title">Register to MyService</h2>
          <p className="register-subtitle">
            Create your account to continue
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>I want to join as:</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="USER">Customer</option>
                <option value="PROFESSIONAL">Professional</option>
                <option value="SUPPORT">Support</option>
              </select>
            </div>

            <button className="register-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className="register-footer">
            Already have an account? <Link to="/">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;