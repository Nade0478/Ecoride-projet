import React from 'react';

const CreditsSummary = ({ totalCredits }) => {
  return (
    <div className="credits-summary mb-4">
      <div className="card shadow-lg border-0 bg-gradient-success">
        <div className="card-body p-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h5 className="text-white mb-2">💎 Crédits totaux de la plateforme</h5>
              <p className="text-white-50 mb-0">
                Revenus générés par les transactions de covoiturage
              </p>
            </div>
            <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
              <div className="credits-amount">
                <h1 className="text-white fw-bold mb-0 display-3">
                  {totalCredits.toLocaleString()}
                </h1>
                <p className="text-white-50 mb-0">crédits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditsSummary;