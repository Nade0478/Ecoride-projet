import React from 'react';

const ReviewsList = ({ avis, noteGlobale }) => {
  const renderStars = (note) => {
    return '⭐'.repeat(Math.round(note));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!avis || avis.length === 0) {
    return (
      <div className="reviews-card card shadow-sm mb-4">
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">💬 Avis des passagers</h4>
        </div>
        <div className="card-body text-center py-5">
          <p className="text-muted">Aucun avis pour le moment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="reviews-card card shadow-sm mb-4">
      <div className="card-header bg-success text-white">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-0">💬 Avis des passagers</h4>
          <div className="rating-summary">
            <span className="fs-5 fw-bold">{noteGlobale}</span>
            <span className="text-warning ms-1">⭐</span>
            <span className="ms-2">({avis.length} avis)</span>
          </div>
        </div>
      </div>
      <div className="card-body p-4">
        {avis.map((review, index) => (
          <div key={review.id} className={`review-item ${index !== avis.length - 1 ? 'border-bottom pb-4 mb-4' : ''}`}>
            <div className="d-flex mb-3">
              <img 
                src={review.photo} 
                alt={review.auteur}
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="mb-1">{review.auteur}</h6>
                    <div className="rating text-warning">
                      {renderStars(review.note)}
                    </div>
                  </div>
                  <small className="text-muted">{formatDate(review.date)}</small>
                </div>
                <p className="mb-0 mt-2 text-muted">{review.commentaire}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;