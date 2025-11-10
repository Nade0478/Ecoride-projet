import React from 'react';

const DriverInfo = ({ chauffeur }) => {
  const calculerAnciennete = (dateInscription) => {
    const date = new Date(dateInscription);
    const maintenant = new Date();
    const diffMois = (maintenant.getFullYear() - date.getFullYear()) * 12 + 
                     (maintenant.getMonth() - date.getMonth());
    
    if (diffMois < 12) {
      return `${diffMois} mois`;
    }
    const annees = Math.floor(diffMois / 12);
    return `${annees} an${annees > 1 ? 's' : ''}`;
  };

  return (
    <div className="driver-info-card card shadow-sm mb-4">
      <div className="card-header bg-success text-white">
        <h4 className="mb-0">👤 À propos du conducteur</h4>
      </div>
      <div className="card-body p-4">
        <div className="row">
          {/* Photo et infos principales */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <img 
              src={chauffeur.photo} 
              alt={chauffeur.pseudo}
              className="rounded-circle mb-3"
              width="120"
              height="120"
            />
            <h5 className="mb-2">{chauffeur.pseudo}</h5>
            <div className="rating mb-2">
              <span className="text-warning fs-5">⭐</span>
              <span className="fw-bold fs-5">{chauffeur.note}</span>
              <span className="text-muted">/5</span>
            </div>
            <div className="stats">
              <small className="text-muted d-block">
                Membre depuis {calculerAnciennete(chauffeur.membre_depuis)}
              </small>
              <small className="text-muted d-block">
                {chauffeur.trajets_effectues} trajets effectués
              </small>
            </div>
          </div>

          {/* Bio et préférences */}
          <div className="col-md-8">
            <div className="bio-section mb-4">
              <h6 className="text-success mb-2">À propos</h6>
              <p className="text-muted">{chauffeur.bio}</p>
            </div>

            <div className="preferences-section">
              <h6 className="text-success mb-3">Préférences de voyage</h6>
              <div className="row g-3">
                <div className="col-6">
                  <div className="preference-item">
                    <span className="me-2">
                      {chauffeur.preferences.fumeur ? '🚬' : '🚭'}
                    </span>
                    <span>
                      {chauffeur.preferences.fumeur ? 'Fumeur accepté' : 'Non-fumeur'}
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="preference-item">
                    <span className="me-2">
                      {chauffeur.preferences.animaux ? '🐕' : '🚫'}
                    </span>
                    <span>
                      {chauffeur.preferences.animaux ? 'Animaux acceptés' : 'Pas d\'animaux'}
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="preference-item">
                    <span className="me-2">
                      {chauffeur.preferences.musique ? '🎵' : '🔇'}
                    </span>
                    <span>
                      {chauffeur.preferences.musique ? 'Musique' : 'Pas de musique'}
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="preference-item">
                    <span className="me-2">
                      {chauffeur.preferences.conversation ? '💬' : '🤫'}
                    </span>
                    <span>
                      {chauffeur.preferences.conversation ? 'Bavard' : 'Calme'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverInfo;