

import { Navbar, Container, Nav } from "react-bootstrap";
import LogoCarrito from "../logoCarrito";
import  "./style.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="shadow-sm">
      <Container>
        {/* LOGO */}
        <Navbar.Brand href="#" className="fw-bold">
          Kafëa
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* LINKS */}
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>

          {/* WIDGET CARRITO */}
          <LogoCarrito />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;