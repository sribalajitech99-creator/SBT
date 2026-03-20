import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import sbtLogo from '../assets/sbt-logo.png';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-sdn py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-style">
          <img 
            src={sbtLogo} 
            alt="SBT Logo" 
            style={{ height: '65px' }} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} to="/" exact="true" className="nav-link-sdn">HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/about-us" className="nav-link-sdn">ABOUT US</Nav.Link>
            <Nav.Link as={NavLink} to="/products" className="nav-link-sdn">PRODUCTS</Nav.Link>
            <Nav.Link as={NavLink} to="/capabilities" className="nav-link-sdn">CAPABILITIES</Nav.Link>
            <Nav.Link as={NavLink} to="/sister-concern" className="nav-link-sdn">SISTER CONCERN</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-sdn">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
