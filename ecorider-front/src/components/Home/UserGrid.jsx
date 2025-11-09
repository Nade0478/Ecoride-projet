import React from 'react';
import '../../styles/UserGrid.css';

const UserGrid = () => {
  const stats = [
    { number: '10 000+', label: 'Utilisateurs actifs', icon: '👥' },
    { number: '50 000+', label: 'Trajets partagés', icon: '🚗' },
    { number: '500 tonnes', label: 'CO2 économisé', icon: '🌍' },
    { number: '4.8/5', label: 'Note moyenne', icon: '⭐' }
  ];

  const testimonials = [
    {
      name: 'Marie Dupont',
      role: 'Utilisatrice régulière',
      avatar: 'https://i.pravatar.cc/150?img=1',
      comment: 'EcoRide m\'a permis de faire des économies tout en réduisant mon impact environnemental. Je recommande !',
      rating: 5
    },
    {
      name: 'Thomas Martin',
      role: 'Conducteur',
      avatar: 'https://i.pravatar.cc/150?img=3',
      comment: 'Super plateforme ! J\'ai rencontré des personnes sympas et je participe à la protection de l\'environnement.',
      rating: 5
    },
    {
      name: 'Sophie Bernard',
      role: 'Passagère',
      avatar: 'https://i.pravatar.cc/150?img=5',
      comment: 'Pratique et écologique. Le système de crédits est simple à comprendre. Parfait pour mes trajets quotidiens.',
      rating: 4
    }
  ];

  return (
    <section className="user-grid-section py-5 bg-light">
      <div className="container">
        {/* Statistiques */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className="display-6 fw-bold text-success">
              EcoRide en chiffres
            </h2>
          </div>
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="stat-card card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="stat-icon mb-3">{stat.icon}</div>
                  <h3 className="stat-number text-success fw-bold mb-2">
                    {stat.number}
                  </h3>
                  <p className="stat-label text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Témoignages */}
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="display-6 fw-bold text-success">
              Ils nous font confiance
            </h2>
            <p className="lead text-muted">Découvrez les avis de notre communauté</p>
          </div>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-warning">⭐</span>
                    ))}
                  </div>
                  <p className="card-text text-muted">
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserGrid;