import { useState } from "react";
import "../styles/AuthForm.css";

// ─── LOGIN FORM ───────────────────────────────────────────────────────────────

export default function LoginForm({ onLogin, onSwitchToSignup }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email.trim() || !formData.password.trim()) {
      alert("Please fill in all fields");
      return;
    }

    onLogin(formData);
  };

  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        
        <div className="auth-header">
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Log in to track your sends</p>
        </div>

        <div className="auth-body">
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="climber@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

        </div>

        <div className="auth-actions">
          <button type="submit" className="btn btn-primary btn-full">
            Log In
          </button>
        </div>

        <div className="auth-footer">
          <p className="auth-switch">
            Don't have an account?{" "}
            <button 
              type="button" 
              className="link-btn"
              onClick={onSwitchToSignup}
            >
              Sign up
            </button>
          </p>
        </div>

      </form>
    </div>
  );
}