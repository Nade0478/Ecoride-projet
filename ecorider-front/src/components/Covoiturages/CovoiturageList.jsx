import React from 'react';
import CovoiturageCard from './CovoiturageCard';

const CovoiturageList = ({ covoiturages }) => {
  if (covoiturages.length === 0) {
    return (
      <div className="alert alert-info">
        <p className="mb-0">Aucun trajet ne correspond à vos critères de recherche.</p>
      </div>
    );
  }

  return (
    <div className="covoiturage-list">
      {covoiturages.map(covoiturage => (
        <CovoiturageCard 
          key={covoiturage.id} 
          covoiturage={covoiturage} 
        />
      ))}
    </div>
  );
};

export default CovoiturageList;