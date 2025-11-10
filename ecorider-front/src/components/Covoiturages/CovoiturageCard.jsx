import React from 'react';
import { useNavigate } from 'react-router-dom';

const CovoiturageCard = ({ covoiturage }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/covoiturage/${covoiturage.id}`, { state: { covoiturage } });
  };

  const formatDuree = (minutes) => {
    const heures = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${heures}h${mins > 0 ? mins : ''}`;
  };

  return (
    <div className="covoiturage-card card shadow-sm mb-3" style={{ transition: 'all 0.3s ease' }}>
      <div className="card-body">
        <div className="row align-items-center">
          {/* Info chauffeur */}
          <div className="col-md-2 text-center">
            <img 
              src={covoiturage.chauffeur.photo} 
              alt={covoiturage.chauffeur.pseudo}
              className="rounded-circle mb-2"
              width="80"
              height="80"
            />
            <h6 className="mb-1">{covoiturage.chauffeur.pseudo}</h6>
            <div className="rating">
              <span className="text-warning">⭐</span>
              <span className="fw-bold">{covoiturage.chauffeur.note}</span>
            </div>
          </div>

          {/* Détails du trajet */}
          <div className="col-md-6">
            <div className="trip-details">
              <div className="d-flex align-items-center mb-2">
                <div className="trip-time">
                  <strong>{covoiturage.heure_depart}</strong>
                  <div className="text-muted small">{covoiturage.depart}</div>
                </div>
                <div className="trip-arrow mx-3 text-center">
                  <div className="text-success">→</div>
                  <div className="text-muted small">{formatDuree(covoiturage.duree)}</div>
                </div>
                <div className="trip-time">
                  <strong>{covoiturage.heure_arrivee}</strong>
                  <div className="text-muted small">{covoiturage.arrivee}</div>
                </div>
              </div>

              <div className="trip-info">
                <span className="badge bg-light text-dark me-2">
                  🚗 {covoiturage.vehicule.marque} {covoiturage.vehicule.modele}
                </span>
                {covoiturage.ecologique && (
                  <span className="badge bg-success me-2">
                    🌱 Écologique
                  </span>
                )}
                <span className="badge bg-light text-dark">
                  👥 {covoiturage.places_restantes} place{covoiturage.places_restantes > 1 ? 's' : ''}
                </span>
              </div>

              <div className="preferences mt-2">
                <small className="text-muted">
                  {!covoiturage.preferences.fumeur && '🚭 Non-fumeur'}
                  {covoiturage.preferences.fumeur && '🚬 Fumeur accepté'}
                  {' • '}
                  {covoiturage.preferences.animaux && '🐕 Animaux acceptés'}
                  {!covoiturage.preferences.animaux && '🐕 Animaux refusés'}
                </small>
              </div>
            </div>
          </div>

          {/* Prix et action */}
          <div className="col-md-4 text-center">
            <div className="price mb-3">
              <h3 className="text-success mb-0">{covoiturage.prix} €</h3>
              <small className="text-muted">par personne</small>
            </div>
            <button 
              className="btn btn-success w-100"
              onClick={handleDetails}
            >
              Voir les détails
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovoiturageCard;