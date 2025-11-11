import React from 'react';

const StatisticsCharts = ({ stats }) => {
  const maxCovoiturages = Math.max(...stats.covoituragesParJour.map(item => item.count));
  const maxCredits = Math.max(...stats.creditsParJour.map(item => item.credits));

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', { 
      day: '2-digit', 
      month: 'short' 
    });
  };

  return (
    <div className="statistics-charts">
      <div className="row">
        {/* Graphique Covoiturages par jour */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-light">
              <h5 className="mb-0">📊 Covoiturages par jour</h5>
            </div>
            <div className="card-body">
              <div className="chart-container">
                {stats.covoituragesParJour.map((item, index) => (
                  <div key={index} className="chart-bar mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <span className="chart-label fw-bold">{formatDate(item.date)}</span>
                      <span className="badge bg-success">{item.count}</span>
                    </div>
                    <div className="progress" style={{ height: '30px' }}>
                      <div 
                        className="progress-bar bg-success" 
                        style={{ width: `${(item.count / maxCovoiturages) * 100}%` }}
                        role="progressbar"
                      >
                        {item.count} trajet{item.count > 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="chart-summary mt-4 p-3 bg-light rounded">
                <div className="row text-center">
                  <div className="col-6">
                    <small className="text-muted d-block">Total</small>
                    <strong className="text-success fs-5">
                      {stats.covoituragesParJour.reduce((acc, item) => acc + item.count, 0)}
                    </strong>
                  </div>
                  <div className="col-6">
                    <small className="text-muted d-block">Moyenne/jour</small>
                    <strong className="text-success fs-5">
                      {Math.round(stats.covoituragesParJour.reduce((acc, item) => acc + item.count, 0) / stats.covoituragesParJour.length)}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graphique Crédits par jour */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-light">
              <h5 className="mb-0">💰 Crédits gagnés par jour</h5>
            </div>
            <div className="card-body">
              <div className="chart-container">
                {stats.creditsParJour.map((item, index) => (
                  <div key={index} className="chart-bar mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <span className="chart-label fw-bold">{formatDate(item.date)}</span>
                      <span className="badge bg-warning text-dark">{item.credits}</span>
                    </div>
                    <div className="progress" style={{ height: '30px' }}>
                      <div 
                        className="progress-bar bg-warning" 
                        style={{ width: `${(item.credits / maxCredits) * 100}%` }}
                        role="progressbar"
                      >
                        {item.credits} crédits
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="chart-summary mt-4 p-3 bg-light rounded">
                <div className="row text-center">
                  <div className="col-6">
                    <small className="text-muted d-block">Total</small>
                    <strong className="text-warning fs-5">
                      {stats.creditsParJour.reduce((acc, item) => acc + item.credits, 0)}
                    </strong>
                  </div>
                  <div className="col-6">
                    <small className="text-muted d-block">Moyenne/jour</small>
                    <strong className="text-warning fs-5">
                      {Math.round(stats.creditsParJour.reduce((acc, item) => acc + item.credits, 0) / stats.creditsParJour.length)}
                    </strong>
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

export default StatisticsCharts;
