import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/NavBar.css";

export default function NavBar({ user }) {
  const profileLabel = user ? "Profile" : "Log In";

  return (
    <Navbar expand="md" className="sendit-navbar">
      <Container fluid className="navbar-inner">

        {/* Brand */}
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand-custom">
          Send It <span className="brand-slash">//</span>
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle aria-controls="main-nav" className="navbar-toggle-custom" />

        {/* Links */}
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-custom active" : "nav-link nav-link-custom"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tracker"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-custom active" : "nav-link nav-link-custom"
              }
            >
              My Routes
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "nav-link nav-link-custom nav-link-profile active"
                  : "nav-link nav-link-custom nav-link-profile"
              }
            >
              {user ? (
                <span className="profile-chip">
                  <span className="profile-chip-avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <span>{profileLabel}</span>
                </span>
              ) : (
                profileLabel
              )}
            </NavLink>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}