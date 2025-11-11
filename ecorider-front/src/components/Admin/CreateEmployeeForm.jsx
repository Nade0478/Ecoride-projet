import React, { useState } from 'react';

const CreateEmployeeForm = () => {
  const [formData, setFormData] = useState({
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const validateForm = () => {
    if (!formData.pseudo || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Tous les champs sont obligatoires');
      return false;
    }

    if (formData.password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Email invalide');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // Simulation d'appel API
      // const response = await fetch('/api/admin/employees', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     pseudo: formData.pseudo,
      //     email: formData.email,
      //     password: formData.password
      //   })
      // });

      setTimeout(() => {
        console.log('Création employé:', formData);
        setSuccess('Employé créé avec succès !');
        setFormData({
          pseudo: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        setIsLoading(false);
      }, 1000);

    } catch (err) {
      setError('Une erreur est survenue lors de la création du compte');
      setIsLoading(false);
    }
  };

  return (
    <div className="create-employee-form card shadow-sm">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">👤 Créer un compte employé</h5>
      </div>
      <div className="card-body p-4">
        {error && (
          <div className="alert alert-danger alert-dismissible fade show">
            {error}
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setError('')}
            ></button>
          </div>
        )}

        {success && (
          <div className="alert alert-success alert-dismissible fade show">
            {success}
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setSuccess('')}
            ></button>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="pseudo" className="form-label fw-bold">
              Pseudo <span className="text-danger">*</span>
            </label>
            <input 
              type="text" 
              className="form-control"
              id="pseudo"
              name="pseudo"
              value={formData.pseudo}
              onChange={handleChange}
              placeholder="Nom d'utilisateur"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email <span className="text-danger">*</span>
            </label>
            <input 
              type="email" 
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="employe@ecoride.fr"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Mot de passe <span className="text-danger">*</span>
            </label>
            <input 
              type="password" 
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Minimum 8 caractères"
              minLength="8"
              required
            />
            <small className="text-muted">Minimum 8 caractères</small>
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="form-label fw-bold">
              Confirmer le mot de passe <span className="text-danger">*</span>
            </label>
            <input 
              type="password" 
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmer le mot de passe"
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-success w-100"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Création en cours...
              </>
            ) : (
              'Créer le compte employé'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeeForm;