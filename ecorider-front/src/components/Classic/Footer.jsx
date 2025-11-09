import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-success">EcoRide</h5>
            <p className="text-muted">
              La plateforme de covoiturage écologique
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-2">
              <strong>Contact :</strong>{' '}
              <a href="mailto:contact@ecoride.fr" className="text-success">
                contact@ecoride.fr
              </a>
            </p>
            <Link to="/mentions-legales" className="text-success">
              Mentions légales
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center text-muted">
            <small>© 2025 EcoRide - Tous droits réservés</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;