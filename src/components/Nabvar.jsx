import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/styles/navbar.css";

function NavBar() {
  return (
    <Navbar bg="none" expand="lg" className="nav mx-auto">
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
          <Link to="/section/portfolio" className="link">
            Portfolio
          </Link>
          <Link to="/section/about" className="link">
            About
          </Link>
          <Link to="/section/cv" className="link">
            CV
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
