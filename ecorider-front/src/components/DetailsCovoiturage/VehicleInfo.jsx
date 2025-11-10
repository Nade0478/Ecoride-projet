import React from 'react';

const VehicleInfo = ({ vehicule, ecologique }) => {
  return (
    <div className="vehicle-info-card card shadow-sm mb-4">
      <div className="card-header bg-success text-white">
        <h4 className="mb-0">🚗 Informations sur le véhicule</h4>
      </div>
      <div className="card-body p-4">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h5 className="mb-3">
              {vehicule.marque} {vehicule.modele}
              {ecologique && (
                <span className="badge bg-success ms-2">🌱 Écologique</span>
              )}
            </h5>

            <div className="vehicle-details">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="detail-item">
                    <span className="text-muted">Couleur :</span>
                    <strong className="ms-2">{vehicule.couleur}</strong>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail-item">
                    <span className="text-muted">Énergie :</span>
                    <strong className="ms-2">{vehicule.energie}</strong>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail-item">
                    <span className="text-muted">Année :</span>
                    <strong className="ms-2">{vehicule.annee}</strong>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail-item">
                    <span className="text-muted">Immatriculation :</span>
                    <strong className="ms-2">{vehicule.immatriculation}</strong>
                  </div>
                </div>
              </div>
            </div>

            {ecologique && (
              <div className="alert alert-success mt-3 mb-0">
                <strong>🌱 Impact environnemental réduit</strong>
                <p className="mb-0 small mt-1">
                  Ce trajet est effectué avec un véhicule électrique, contribuant ainsi 
                  à la réduction des émissions de CO2.
                </p>
              </div>
            )}
          </div>

          <div className="col-md-4 text-center">
            <div className="vehicle-icon">
              {ecologique ? (
                <div className="fs-1">🚗⚡</div>
              ) : (
                <div className="fs-1">🚗</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;