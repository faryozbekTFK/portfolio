import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/styles/navbar.css";

function NavBar() {
  return (
    <Navbar bg="none" expand="lg" className="nav">
      <Container className="navCont ">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="menu">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/portfolio" className="link">
            Portfolio
          </Link>
          <Link to="/" className="link">
            CV
          </Link>
          <Link to="/" className="link">
            About
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
