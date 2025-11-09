import React from 'react';
import '../../styles/Presentation.css';

const Presentation = () => {
  return (
    <section className="presentation-section py-5" id="about">
      <div className="container">
        {/* Titre principal */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-success">
            Pourquoi choisir EcoRide ?
          </h2>
          <p className="lead text-muted">
            Une plateforme de covoiturage engagée pour l'environnement
          </p>
        </div>

        {/* Cartes des avantages */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body text-center p-4">
                <div className="icon-circle bg-success bg-opacity-10 mb-3">
                  <span className="fs-1">🌱</span>
                </div>
                <h5 className="card-title text-success fw-bold">Écologique</h5>
                <p className="card-text text-muted">
                  Réduisez votre empreinte carbone en partageant vos trajets. 
                  Privilégiez les véhicules électriques pour un impact encore plus faible.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body text-center p-4">
                <div className="icon-circle bg-success bg-opacity-10 mb-3">
                  <span className="fs-1">💰</span>
                </div>
                <h5 className="card-title text-success fw-bold">Économique</h5>
                <p className="card-text text-muted">
                  Partagez les frais de vos déplacements et économisez sur 
                  vos trajets quotidiens ou occasionnels.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body text-center p-4">
                <div className="icon-circle bg-success bg-opacity-10 mb-3">
                  <span className="fs-1">👥</span>
                </div>
                <h5 className="card-title text-success fw-bold">Convivial</h5>
                <p className="card-text text-muted">
                  Rencontrez de nouvelles personnes et créez du lien social 
                  pendant vos déplacements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Notre Mission */}
        <div className="row align-items-center mt-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600" 
              alt="Covoiturage écologique" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold text-success mb-4">Notre mission</h3>
            <p className="mb-3">
              EcoRide est née de la volonté de réduire l'impact environnemental 
              des déplacements en encourageant le covoiturage. Nous croyons 
              qu'ensemble, nous pouvons faire la différence.
            </p>
            <p className="mb-4">
              Notre plateforme met en relation des conducteurs ayant des places 
              disponibles avec des passagers recherchant un trajet, le tout dans 
              une démarche écologique et économique.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-success">✓</span> Trajets en voiture uniquement
              </li>
              <li className="mb-2">
                <span className="text-success">✓</span> Mise en avant des véhicules électriques
              </li>
              <li className="mb-2">
                <span className="text-success">✓</span> Système de crédits simple et transparent
              </li>
              <li className="mb-2">
                <span className="text-success">✓</span> Communauté bienveillante et vérifiée
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;