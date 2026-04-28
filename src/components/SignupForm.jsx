import { useState } from "react";
import "../styles/AuthForm.css";

// ─── SIGNUP FORM ──────────────────────────────────────────────────────────────

export default function SignupForm({ onSignup, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || 
        !formData.password.trim() || !formData.confirmPassword.trim()) {
      alert("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    onSignup({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        
        <div className="auth-header">
          <h2 className="auth-title">Create Account</h2>
          <p className="auth-subtitle">Start tracking your climbs</p>
        </div>

        <div className="auth-body">
          
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="Alex Honnold"
              required
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

        </div>

        <div className="auth-actions">
          <button type="submit" className="btn btn-primary btn-full">
            Sign Up
          </button>
        </div>

        <div className="auth-footer">
          <p className="auth-switch">
            Already have an account?{" "}
            <button 
              type="button" 
              className="link-btn"
              onClick={onSwitchToLogin}
            >
              Log in
            </button>
          </p>
        </div>

      </form>
    </div>
  );
}