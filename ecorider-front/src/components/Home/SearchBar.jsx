import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/SearchBar.css';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    depart: '',
    arrivee: '',
    date: ''
  });

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation simple
    if (!searchData.depart || !searchData.arrivee || !searchData.date) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    // Rediriger vers la page des covoiturages avec les paramètres de recherche
    navigate('/covoiturages', { state: searchData });
  };

  return (
    <div className="search-bar-container" id="search">
      <div className="search-card card shadow-lg p-4">
        <div className="card-body">
          <h3 className="card-title text-center mb-4 text-success">
            🚗 Rechercher un trajet
          </h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="depart" className="form-label">
                📍 Ville de départ
              </label>
              <input 
                type="text" 
                className="form-control form-control-lg" 
                id="depart"
                name="depart"
                value={searchData.depart}
                onChange={handleChange}
                placeholder="Ex: Paris"
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="arrivee" className="form-label">
                🎯 Ville d'arrivée
              </label>
              <input 
                type="text" 
                className="form-control form-control-lg" 
                id="arrivee"
                name="arrivee"
                value={searchData.arrivee}
                onChange={handleChange}
                placeholder="Ex: Lyon"
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                📅 Date de départ
              </label>
              <input 
                type="date" 
                className="form-control form-control-lg" 
                id="date"
                name="date"
                value={searchData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-success btn-lg w-100 mt-3"
            >
              Rechercher
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;