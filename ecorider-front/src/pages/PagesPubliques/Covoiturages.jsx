import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../components/Classic/Menu';
import Footer from '../../components/Classic/Footer';
import SearchForm from '../../components/Covoiturages/SearchForm';
import FilterBar from '../../components/Covoiturages/FilterBar';
import CovoiturageList from '../../components/Covoiturages/CovoiturageList';
import '../../styles/Covoiturages.css';

const Covoiturages = () => {
  const location = useLocation();
  const [searchCriteria, setSearchCriteria] = useState({
    depart: '',
    arrivee: '',
    date: ''
  });
  
  const [filters, setFilters] = useState({
    ecologique: false,
    prixMax: '',
    dureeMax: '',
    noteMin: ''
  });

  const [covoiturages, setCovoiturages] = useState([]);
  const [filteredCovoiturages, setFilteredCovoiturages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [suggestedDate, setSuggestedDate] = useState(null);

  // Récupérer les données de recherche depuis la navigation
  useEffect(() => {
    if (location.state) {
      setSearchCriteria(location.state);
      handleSearch(location.state);
    }
  }, [location.state]);

  // Fonction de recherche
  const handleSearch = async (criteria) => {
    setLoading(true);
    setNoResults(false);
    setSuggestedDate(null);

    try {
      // Simulation d'appel API - À remplacer par ton vrai appel
      // const response = await fetch(`/api/covoiturages/search`, {
      //   method: 'POST',
      //   body: JSON.stringify(criteria)
      // });
      // const data = await response.json();

      // Données fictives pour l'exemple
      setTimeout(() => {
        const mockData = [
          {
            id: 1,
            chauffeur: {
              pseudo: 'Jean Dupont',
              photo: 'https://i.pravatar.cc/150?img=12',
              note: 4.8
            },
            depart: criteria.depart,
            arrivee: criteria.arrivee,
            date_depart: criteria.date,
            heure_depart: '08:00',
            heure_arrivee: '11:00',
            duree: 180, // en minutes
            places_restantes: 3,
            prix: 25,
            ecologique: true,
            vehicule: {
              marque: 'Tesla',
              modele: 'Model 3',
              energie: 'Électrique'
            },
            preferences: {
              fumeur: false,
              animaux: true
            }
          },
          {
            id: 2,
            chauffeur: {
              pseudo: 'Marie Martin',
              photo: 'https://i.pravatar.cc/150?img=5',
              note: 4.5
            },
            depart: criteria.depart,
            arrivee: criteria.arrivee,
            date_depart: criteria.date,
            heure_depart: '14:30',
            heure_arrivee: '17:45',
            duree: 195,
            places_restantes: 2,
            prix: 22,
            ecologique: false,
            vehicule: {
              marque: 'Renault',
              modele: 'Clio',
              energie: 'Essence'
            },
            preferences: {
              fumeur: false,
              animaux: false
            }
          },
          {
            id: 3,
            chauffeur: {
              pseudo: 'Pierre Bernard',
              photo: 'https://i.pravatar.cc/150?img=8',
              note: 4.9
            },
            depart: criteria.depart,
            arrivee: criteria.arrivee,
            date_depart: criteria.date,
            heure_depart: '18:00',
            heure_arrivee: '21:00',
            duree: 180,
            places_restantes: 1,
            prix: 28,
            ecologique: true,
            vehicule: {
              marque: 'Nissan',
              modele: 'Leaf',
              energie: 'Électrique'
            },
            preferences: {
              fumeur: false,
              animaux: true
            }
          }
        ];

        if (mockData.length === 0) {
          setNoResults(true);
          // Proposer la date suivante
          const nextDate = new Date(criteria.date);
          nextDate.setDate(nextDate.getDate() + 1);
          setSuggestedDate(nextDate.toISOString().split('T')[0]);
        }

        setCovoiturages(mockData);
        setFilteredCovoiturages(mockData);
        setLoading(false);
      }, 1000);

    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      setLoading(false);
    }
  };

  // Appliquer les filtres
  useEffect(() => {
    let filtered = [...covoiturages];

    // Filtre écologique
    if (filters.ecologique) {
      filtered = filtered.filter(c => c.ecologique);
    }

    // Filtre prix maximum
    if (filters.prixMax) {
      filtered = filtered.filter(c => c.prix <= parseFloat(filters.prixMax));
    }

    // Filtre durée maximum
    if (filters.dureeMax) {
      filtered = filtered.filter(c => c.duree <= parseFloat(filters.dureeMax));
    }

    // Filtre note minimum
    if (filters.noteMin) {
      filtered = filtered.filter(c => c.chauffeur.note >= parseFloat(filters.noteMin));
    }

    setFilteredCovoiturages(filtered);
  }, [filters, covoiturages]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearchChange = (newCriteria) => {
    setSearchCriteria(newCriteria);
    handleSearch(newCriteria);
  };

  const handleUseSuggestedDate = () => {
    const newCriteria = { ...searchCriteria, date: suggestedDate };
    setSearchCriteria(newCriteria);
    handleSearch(newCriteria);
  };

  return (
    <>
      <Menu />
      <div className="covoiturages-page">
        <div className="container py-5">
          <h1 className="text-center text-success mb-4">
            🚗 Trouver un covoiturage
          </h1>

          {/* Formulaire de recherche */}
          <SearchForm 
            searchCriteria={searchCriteria}
            onSearch={handleSearchChange}
          />

          {/* Résultats */}
          {!loading && covoiturages.length > 0 && (
            <>
              <div className="results-header mb-4">
                <h5>
                  {filteredCovoiturages.length} trajet{filteredCovoiturages.length > 1 ? 's' : ''} trouvé{filteredCovoiturages.length > 1 ? 's' : ''}
                </h5>
              </div>

              <div className="row">
                {/* Filtres */}
                <div className="col-lg-3 mb-4">
                  <FilterBar 
                    filters={filters}
                    onFilterChange={handleFilterChange}
                  />
                </div>

                {/* Liste des covoiturages */}
                <div className="col-lg-9">
                  <CovoiturageList covoiturages={filteredCovoiturages} />
                </div>
              </div>
            </>
          )}

          {/* Chargement */}
          {loading && (
            <div className="text-center py-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Chargement...</span>
              </div>
              <p className="mt-3 text-muted">Recherche en cours...</p>
            </div>
          )}

          {/* Aucun résultat */}
          {noResults && (
            <div className="alert alert-warning text-center">
              <h5>Aucun trajet disponible pour cette date</h5>
              {suggestedDate && (
                <div className="mt-3">
                  <p>Le prochain trajet disponible est le {new Date(suggestedDate).toLocaleDateString('fr-FR')}</p>
                  <button 
                    className="btn btn-success"
                    onClick={handleUseSuggestedDate}
                  >
                    Voir les trajets du {new Date(suggestedDate).toLocaleDateString('fr-FR')}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* État initial - pas de recherche */}
          {!loading && covoiturages.length === 0 && !noResults && (
            <div className="text-center py-5">
              <div className="empty-state">
                <span className="fs-1">🔍</span>
                <h5 className="mt-3 text-muted">
                  Lancez une recherche pour trouver un covoiturage
                </h5>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Covoiturages;