import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/NavBar.css";

export default function NavBar() {
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
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/tracker"
              className={({ isActive }) => isActive ? "nav-link-custom active" : "nav-link-custom"}
            >
              My Routes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}