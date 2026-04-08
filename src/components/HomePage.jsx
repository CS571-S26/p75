import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/HomePage.css";

// ─── FEATURE CARDS ────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "🪨",
    title: "Log Your Climbs",
    description: "Track every route you've attempted. Add grades, styles, and notes to build your climbing history.",
  },
  {
    icon: "⟳",
    title: "Manage Projects",
    description: "Mark routes as projects to keep tabs on what you're working toward. Never lose track of a climb again.",
  },
  {
    icon: "✓",
    title: "Track Your Sends",
    description: "Celebrate every send. Watch your completed routes stack up and see your progress over time.",
  },
  {
    icon: "⚡",
    title: "Filter & Find",
    description: "Filter by grade, style, or status to quickly find the routes that match your session goals.",
  },
];

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* Hero */}
      <section className="hero">
        <div className="hero-eyebrow">Your Climbing Logbook</div>
        <h1 className="hero-title">
          Track Every<br />
          <span className="hero-accent">Route You Climb.</span>
        </h1>
        <p className="hero-subtitle">
          A clean, fast tracker for boulderers and sport climbers.
          Log routes, manage projects, and watch your progress build.
        </p>
        <button className="hero-cta" onClick={() => navigate("/tracker")}>
          Start Tracking
          <span className="cta-arrow">→</span>
        </button>
      </section>

      {/* Features */}
      <section className="features">
        <Container fluid>
          <div className="features-label">What you get</div>
          <Row className="features-grid">
            {FEATURES.map((f) => (
              <Col key={f.title} xs={12} sm={6} lg={3} className="feature-col">
                <div className="feature-card">
                  <span className="feature-icon">{f.icon}</span>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <div className="hiw-label">How it works</div>
        <div className="hiw-steps">
          <div className="hiw-step">
            <div className="hiw-num">01</div>
            <div className="hiw-text">Head to <strong>My Routes</strong> in the nav</div>
          </div>
          <div className="hiw-divider" />
          <div className="hiw-step">
            <div className="hiw-num">02</div>
            <div className="hiw-text">Add a route with its grade and style</div>
          </div>
          <div className="hiw-divider" />
          <div className="hiw-step">
            <div className="hiw-num">03</div>
            <div className="hiw-text">Mark it Unclimbed, Project, or Sent</div>
          </div>
          <div className="hiw-divider" />
          <div className="hiw-step">
            <div className="hiw-num">04</div>
            <div className="hiw-text">Filter and track your progress over time</div>
          </div>
        </div>
      </section>

    </div>
  );
}