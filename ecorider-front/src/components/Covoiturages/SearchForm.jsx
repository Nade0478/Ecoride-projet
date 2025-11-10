import React, { useState } from 'react';

const SearchForm = ({ searchCriteria, onSearch }) => {
  const [formData, setFormData] = useState(searchCriteria);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.depart || !formData.arrivee || !formData.date) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    onSearch(formData);
  };

  return (
    <div className="search-form-container mb-4">
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row g-3 align-items-end">
              <div className="col-md-3">
                <label className="form-label fw-bold">
                  📍 Départ
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="depart"
                  value={formData.depart}
                  onChange={handleChange}
                  placeholder="Ville de départ"
                  required
                />
              </div>
              
              <div className="col-md-3">
                <label className="form-label fw-bold">
                  🎯 Arrivée
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="arrivee"
                  value={formData.arrivee}
                  onChange={handleChange}
                  placeholder="Ville d'arrivée"
                  required
                />
              </div>
              
              <div className="col-md-3">
                <label className="form-label fw-bold">
                  📅 Date
                </label>
                <input 
                  type="date" 
                  className="form-control" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              <div className="col-md-3">
                <button type="submit" className="btn btn-success w-100">
                  🔍 Rechercher
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;