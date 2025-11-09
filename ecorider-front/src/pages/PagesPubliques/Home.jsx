import React from 'react';
import Presentation from '../../components/Home/Presentation';
import SearchBar from '../../components/Home/SearchBar';
import UserGrid from '../../components/Home/UserGrid';
import '../../styles/HomePage.css';
import Menu from '../../components/Classic/Menu';
import Footer from '../../components/Classic/Footer';

const Home = () => {
  return (
    <>
      <Menu />
      
      {/* Section Hero avec la barre de recherche */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold text-success mb-4">
                Voyagez écologique, voyagez EcoRide
              </h1>
              <p className="lead text-muted mb-4">
                Rejoignez la communauté du covoiturage responsable et réduisez 
                votre empreinte carbone tout en économisant sur vos trajets.
              </p>
              <div className="d-flex gap-3">
                <a href="#search" className="btn btn-success btn-lg">
                  Trouver un trajet
                </a>
                <a href="#about" className="btn btn-outline-success btn-lg">
                  En savoir plus
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Section Présentation */}
      <Presentation />

      {/* Section Statistiques / Témoignages */}
      <UserGrid />

      <Footer />
    </>
  );
};

export default Home;