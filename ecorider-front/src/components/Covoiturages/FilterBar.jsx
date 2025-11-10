import React, { useState } from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newFilters = {
      ...localFilters,
      [name]: type === 'checkbox' ? checked : value
    };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      ecologique: false,
      prixMax: '',
      dureeMax: '',
      noteMin: ''
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="filter-bar card shadow-sm sticky-top" style={{ top: '20px' }}>
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">🔧 Filtres</h5>
      </div>
      <div className="card-body">
        {/* Filtre écologique */}
        <div className="filter-section mb-4 pb-3 border-bottom">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              name="ecologique"
              id="ecologique"
              checked={localFilters.ecologique}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="ecologique">
              🌱 Véhicule électrique uniquement
            </label>
          </div>
        </div>

        {/* Filtre prix */}
        <div className="filter-section mb-4 pb-3 border-bottom">
          <label className="form-label fw-bold">💰 Prix maximum</label>
          <div className="input-group">
            <input 
              type="number" 
              className="form-control" 
              name="prixMax"
              value={localFilters.prixMax}
              onChange={handleChange}
              placeholder="Ex: 30"
              min="0"
            />
            <span className="input-group-text">€</span>
          </div>
          {localFilters.prixMax && (
            <small className="text-muted">Max: {localFilters.prixMax}€</small>
          )}
        </div>

        {/* Filtre durée */}
        <div className="filter-section mb-4 pb-3 border-bottom">
          <label className="form-label fw-bold">⏱️ Durée maximum</label>
          <div className="input-group">
            <input 
              type="number" 
              className="form-control" 
              name="dureeMax"
              value={localFilters.dureeMax}
              onChange={handleChange}
              placeholder="Ex: 180"
              min="0"
            />
            <span className="input-group-text">min</span>
          </div>
          {localFilters.dureeMax && (
            <small className="text-muted">
              Max: {Math.floor(localFilters.dureeMax / 60)}h{localFilters.dureeMax % 60}
            </small>
          )}
        </div>

        {/* Filtre note */}
        <div className="filter-section mb-4">
          <label className="form-label fw-bold">⭐ Note minimum</label>
          <select 
            className="form-select" 
            name="noteMin"
            value={localFilters.noteMin}
            onChange={handleChange}
          >
            <option value="">Toutes les notes</option>
            <option value="4.5">4.5 ⭐ et plus</option>
            <option value="4.0">4.0 ⭐ et plus</option>
            <option value="3.5">3.5 ⭐ et plus</option>
            <option value="3.0">3.0 ⭐ et plus</option>
          </select>
        </div>

        {/* Bouton reset */}
        <button 
          className="btn btn-outline-secondary w-100"
          onClick={handleReset}
        >
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  );
};

export default FilterBar;