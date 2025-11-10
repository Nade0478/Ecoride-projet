import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../../components/Classic/Menu';
import Footer from '../../components/Classic/Footer';
import TripInfo from '../../components/DetailsCovoiturage/TripInfo';
import DriverInfo from '../../components/DetailsCovoiturage/DriverInfo';
import VehicleInfo from '../../components/DetailsCovoiturage/VehicleInfo';
import ReviewsList from '../../components/DetailsCovoiturage/ReviewsList';
import '../../styles/DetailsCovoiturage.css';

const DetailsCovoiturage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [covoiturage, setCovoiturage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showParticipateModal, setShowParticipateModal] = useState(false);

  useEffect(() => {
    // Si les données sont passées via navigation
    if (location.state?.covoiturage) {
      setCovoiturage(location.state.covoiturage);
      setLoading(false);
    } else {
      // Sinon, charger depuis l'API
      loadCovoiturage(id);
    }
  }, [id, location.state]);

  const loadCovoiturage = async (covoiturageId) => {
    setLoading(true);
    try {
      // Simulation d'appel API - À remplacer par ton vrai appel
      setTimeout(() => {
        const mockData = {
          id: parseInt(covoiturageId),
          chauffeur: {
            pseudo: 'Jean Dupont',
            photo: 'https://i.pravatar.cc/150?img=12',
            note: 4.8,
            membre_depuis: '2023-01-15',
            trajets_effectues: 45,
            bio: 'Passionné d\'écologie, je privilégie toujours les trajets en voiture électrique. J\'aime discuter et partager de bons moments pendant les voyages !',
            preferences: {
              fumeur: false,
              animaux: true,
              musique: true,
              conversation: true
            }
          },
          depart: 'Paris',
          arrivee: 'Lyon',
          date_depart: '2025-11-15',
          heure_depart: '08:00',
          heure_arrivee: '11:00',
          duree: 180,
          places_restantes: 3,
          places_total: 4,
          prix: 25,
          ecologique: true,
          vehicule: {
            marque: 'Tesla',
            modele: 'Model 3',
            couleur: 'Bleu',
            energie: 'Électrique',
            immatriculation: 'AB-123-CD',
            annee: 2022
          },
          etapes: [
            { ville: 'Paris', heure: '08:00', type: 'depart' },
            { ville: 'Fontainebleau', heure: '09:00', type: 'etape' },
            { ville: 'Lyon', heure: '11:00', type: 'arrivee' }
          ],
          avis: [
            {
              id: 1,
              auteur: 'Marie Dubois',
              photo: 'https://i.pravatar.cc/150?img=5',
              note: 5,
              date: '2025-10-20',
              commentaire: 'Excellent trajet ! Jean est très sympa et ponctuel. La voiture est confortable et propre.'
            },
            {
              id: 2,
              auteur: 'Thomas Martin',
              photo: 'https://i.pravatar.cc/150?img=8',
              note: 5,
              date: '2025-10-15',
              commentaire: 'Super expérience de covoiturage. Conduite souple et agréable. Je recommande vivement !'
            },
            {
              id: 3,
              auteur: 'Sophie Bernard',
              photo: 'https://i.pravatar.cc/150?img=1',
              note: 4,
              date: '2025-10-10',
              commentaire: 'Très bon trajet, un peu de retard au départ mais le reste était parfait.'
            }
          ]
        };

        setCovoiturage(mockData);
        setLoading(false);
      }, 800);

    } catch (error) {
      console.error('Erreur lors du chargement:', error);
      setLoading(false);
    }
  };

  const handleParticipate = () => {
    // Vérifier si l'utilisateur est connecté
    const isLoggedIn = false; // À remplacer par ta vraie logique

    if (!isLoggedIn) {
      navigate('/login', { state: { from: `/covoiturage/${id}` } });
      return;
    }

    if (covoiturage.places_restantes === 0) {
      alert('Désolé, il n\'y a plus de places disponibles pour ce trajet.');
      return;
    }

    setShowParticipateModal(true);
  };

  const confirmParticipation = async () => {
    try {
      // Appel API ici
      alert('Votre participation a été confirmée !');
      setShowParticipateModal(false);
      loadCovoiturage(id);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  if (loading) {
    return (
      <>
        <Menu />
        <div className="container py-5 text-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!covoiturage) {
    return (
      <>
        <Menu />
        <div className="container py-5 text-center">
          <h3 className="text-danger">Covoiturage introuvable</h3>
          <button 
            className="btn btn-success mt-3"
            onClick={() => navigate('/covoiturages')}
          >
            Retour aux covoiturages
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Menu />
      <div className="details-covoiturage-page">
        <div className="container py-5">
          <button 
            className="btn btn-outline-success mb-4"
            onClick={() => navigate(-1)}
          >
            ← Retour
          </button>

          <div className="row">
            <div className="col-lg-8 mb-4">
              <TripInfo covoiturage={covoiturage} />
              <DriverInfo chauffeur={covoiturage.chauffeur} />
              <VehicleInfo vehicule={covoiturage.vehicule} ecologique={covoiturage.ecologique} />
              <ReviewsList avis={covoiturage.avis} noteGlobale={covoiturage.chauffeur.note} />
            </div>

            <div className="col-lg-4">
              <div className="booking-card card shadow-lg sticky-top" style={{ top: '20px' }}>
                <div className="card-body p-4">
                  <div className="price-section text-center mb-4">
                    <h2 className="text-success mb-0">{covoiturage.prix} €</h2>
                    <small className="text-muted">par personne</small>
                  </div>

                  <div className="trip-summary mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Date</span>
                      <strong>{new Date(covoiturage.date_depart).toLocaleDateString('fr-FR')}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Heure</span>
                      <strong>{covoiturage.heure_depart}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Durée</span>
                      <strong>{Math.floor(covoiturage.duree / 60)}h{covoiturage.duree % 60}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="text-muted">Places</span>
                      <strong>{covoiturage.places_restantes} / {covoiturage.places_total}</strong>
                    </div>
                  </div>

                  {covoiturage.ecologique && (
                    <div className="alert alert-success mb-4">
                      🌱 Trajet écologique
                    </div>
                  )}

                  <button 
                    className="btn btn-success btn-lg w-100"
                    onClick={handleParticipate}
                    disabled={covoiturage.places_restantes === 0}
                  >
                    {covoiturage.places_restantes === 0 ? 'Complet' : 'Participer'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmation */}
      {showParticipateModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmer</h5>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => setShowParticipateModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Confirmer votre participation pour <strong>{covoiturage.prix} crédits</strong> ?</p>
              </div>
              <div className="modal-footer">
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowParticipateModal(false)}
                >
                  Annuler
                </button>
                <button 
                  className="btn btn-success"
                  onClick={confirmParticipation}
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default DetailsCovoiturage;