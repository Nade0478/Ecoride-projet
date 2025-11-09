import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Logo-ecoride.png";

const Logo = () => {
  return (
    <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
      <img
        src={logo}
        alt="Ecoride Logo"
        style={{ width: '48px', height: '48px' }}
        className="me-3"
      />
      <span className="fs-4 fw-bold text-white">EcoRide</span>
    </Link>
  );
};

export default Logo;