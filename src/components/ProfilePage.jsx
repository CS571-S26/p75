import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import GradeTag from "./GradeTag";
import "../styles/ProfilePage.css";

// ─── PROFILE PAGE ─────────────────────────────────────────────────────────────

const GRADE_ORDER = [
  "V0", "V1", "V2", "5.9", "5.10a", "5.10b", "V3", "5.10c", "V4", "5.10d",
  "V5", "5.11a", "V6", "5.11b", "V7", "5.11c", "V8", "5.11d", "V9", "5.12a",
  "V10", "5.12b", "V11", "5.12c", "V12", "5.12d", "V13", "5.13a", "V14",
  "5.13b", "V15", "5.13c", "V16", "5.13d", "V17", "5.14a", "5.14b", "5.14c", "5.14d",
];

const GRADE_RANK = new Map(GRADE_ORDER.map((grade, index) => [grade, index]));

function getGradeRank(grade) {
  return GRADE_RANK.get(grade) ?? -1;
}

export default function ProfilePage({ userState, routeState }) {
  const { user, login, signup, logout } = userState;
  const [showLogin, setShowLogin] = useState(true);

  const sentRoutes = routeState?.routes?.filter((route) => route.status === "completed") ?? [];

  const hardestSent = sentRoutes.reduce((hardest, route) => {
    if (!hardest) return route;
    return getGradeRank(route.grade) > getGradeRank(hardest.grade) ? route : hardest;
  }, null);

  // If user is logged in, show profile
  if (user) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          
          <div className="profile-header">
            <div className="profile-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-email">{user.email}</p>
          </div>

          <div className="profile-stats">
            <div className="profile-stat-card">
              <div className="stat-info">
                <div className="stat-value">Member since</div>
                <div className="stat-label">
                  {new Date(user.joinedDate).toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </div>
              </div>
            </div>

            <div className="profile-stat-card">
              <div className="stat-info">
                <div className="stat-value">Hardest Send</div>
                <div className="stat-label">
                  {hardestSent ? (
                    <GradeTag grade={hardestSent.grade} />
                  ) : (
                    <span className="empty-stat">No sends yet</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button className="btn btn-secondary btn-full" onClick={logout}>
              Log Out
            </button>
          </div>

        </div>
      </div>
    );
  }

  // If not logged in, show auth forms
  return (
    <div className="profile-page">
      {showLogin ? (
        <LoginForm 
          onLogin={login}
          onSwitchToSignup={() => setShowLogin(false)}
        />
      ) : (
        <SignupForm 
          onSignup={signup}
          onSwitchToLogin={() => setShowLogin(true)}
        />
      )}
    </div>
  );
}