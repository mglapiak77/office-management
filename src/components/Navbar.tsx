import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
              <Navbar.Brand as={Link} to="/">
                <i className="bi bi-building me-2"></i>
                Office Management
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/reservations">Rezerwacje</Nav.Link>
                  <Nav.Link as={Link} to="/rooms">Pomieszczenia</Nav.Link>
                  <Nav.Link as={Link} to="/employees">Pracownicy</Nav.Link>
                  <Nav.Link as={Link} to="/resources">Zasoby</Nav.Link>
                  <Nav.Link as={Link} to="/issues">Problemy</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
  );
}

export default Navigation;