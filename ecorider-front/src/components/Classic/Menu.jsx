import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Menu.css";
import Logo from "./Logo";

const Menu = () => {
  return (
    <Navbar 
      expand="lg" 
      className="navbar-custom shadow-lg" 
      variant="dark"
    >
      <Container>
        {/* Logo EcoRide - Utilisation du composant Logo */}
        <Logo />

        {/* Toggle pour mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation centrale */}
          <Nav className="mx-auto">
            <Link to="/Home" className="nav-link text-white">Accueil</Link>
            <Link to="/Covoiturages" className="nav-link text-white">Covoiturage</Link>
            <Link to="/DetailsCovoiturage" className="nav-link text-white">Détails Trajets</Link>
            <Link to="/Contact" className="nav-link text-white">Contact</Link>
          </Nav>

          {/* Boutons connexion à droite */}
          <Nav className="ms-auto d-flex flex-row align-items-center">
            <Link to="/login" className="text-decoration-none">
              <Button variant="success" size="sm" className="me-2">
                Se connecter
              </Button>
            </Link>
            <Link to="/register" className="text-decoration-none">
              <Button variant="outline-light" size="sm">
                S'inscrire
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;