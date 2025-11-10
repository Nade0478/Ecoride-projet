import React from 'react';

const TripInfo = ({ covoiturage }) => {
  const formatDuree = (minutes) => {
    const heures = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${heures}h${mins > 0 ? mins : ''}`;
  };

  return (
    <div className="trip-info-card card shadow-sm mb-4">
      <div className="card-header bg-success text-white">
        <h4 className="mb-0">📍 Détails du trajet</h4>
      </div>
      <div className="card-body p-4">
        {/* Itinéraire principal */}
        <div className="main-route mb-4">
          <div className="row">
            <div className="col-5">
              <div className="location-info">
                <h5 className="text-success mb-1">{covoiturage.depart}</h5>
                <p className="text-muted mb-0">
                  {new Date(covoiturage.date_depart).toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="fw-bold mb-0">{covoiturage.heure_depart}</p>
              </div>
            </div>
            
            <div className="col-2 text-center">
              <div className="route-arrow">
                <div className="text-success fs-3">→</div>
                <small className="text-muted">{formatDuree(covoiturage.duree)}</small>
              </div>
            </div>
            
            <div className="col-5">
              <div className="location-info">
                <h5 className="text-success mb-1">{covoiturage.arrivee}</h5>
                <p className="text-muted mb-0">Arrivée estimée</p>
                <p className="fw-bold mb-0">{covoiturage.heure_arrivee}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Étapes intermédiaires */}
        {covoiturage.etapes && covoiturage.etapes.length > 2 && (
          <div className="etapes-section mt-4 pt-4 border-top">
            <h6 className="mb-3">Étapes du trajet</h6>
            <div className="etapes-list">
              {covoiturage.etapes.map((etape, index) => (
                <div key={index} className="etape-item d-flex align-items-center mb-2">
                  <div className="etape-icon me-3">
                    {etape.type === 'depart' && '🟢'}
                    {etape.type === 'etape' && '🔵'}
                    {etape.type === 'arrivee' && '🔴'}
                  </div>
                  <div className="flex-grow-1">
                    <strong>{etape.ville}</strong>
                    <span className="text-muted ms-2">{etape.heure}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Informations complémentaires */}
        <div className="additional-info mt-4 pt-4 border-top">
          <div className="row text-center">
            <div className="col-4">
              <div className="info-badge">
                <div className="fs-4 mb-2">👥</div>
                <div className="fw-bold">{covoiturage.places_restantes}</div>
                <small className="text-muted">Place{covoiturage.places_restantes > 1 ? 's' : ''} disponible{covoiturage.places_restantes > 1 ? 's' : ''}</small>
              </div>
            </div>
            <div className="col-4">
              <div className="info-badge">
                <div className="fs-4 mb-2">💰</div>
                <div className="fw-bold">{covoiturage.prix} €</div>
                <small className="text-muted">Par personne</small>
              </div>
            </div>
            <div className="col-4">
              <div className="info-badge">
                <div className="fs-4 mb-2">⏱️</div>
                <div className="fw-bold">{formatDuree(covoiturage.duree)}</div>
                <small className="text-muted">Durée du trajet</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;