import React, { useState, useEffect } from "react";
import Menu from "../../components/Classic/Menu";
import Footer from "../../components/Classic/Footer";
import '../../styles/EspaceAdmin.css';

function EspaceAdmin() {
  const [stats, setStats] = useState({
    totalCredits: 0,
    covoituragesParJour: [],
    creditsParJour: []
  });

  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([]);
  
  const [newEmployee, setNewEmployee] = useState({
    pseudo: '',
    email: '',
    password: ''
  });

  // Simulation de récupération des données
  useEffect(() => {
    // Ici tu feras tes appels API
    // Exemple de données fictives
    setStats({
      totalCredits: 1250,
      covoituragesParJour: [
        { date: '2025-11-01', count: 15 },
        { date: '2025-11-02', count: 22 },
        { date: '2025-11-03', count: 18 },
        { date: '2025-11-04', count: 25 },
        { date: '2025-11-05', count: 30 }
      ],
      creditsParJour: [
        { date: '2025-11-01', credits: 30 },
        { date: '2025-11-02', credits: 44 },
        { date: '2025-11-03', credits: 36 },
        { date: '2025-11-04', credits: 50 },
        { date: '2025-11-05', credits: 60 }
      ]
    });
  }, []);

  const handleCreateEmployee = (e) => {
    e.preventDefault();
    // Ici tu enverras les données au backend
    console.log('Création employé:', newEmployee);
    alert('Employé créé avec succès !');
    setNewEmployee({ pseudo: '', email: '', password: '' });
  };

  const handleSuspendAccount = (userId, accountType) => {
    if (window.confirm(`Êtes-vous sûr de vouloir suspendre ce compte ${accountType} ?`)) {
      // Ici tu enverras la requête de suspension au backend
      console.log(`Suspension du compte ${accountType} ID:`, userId);
      alert('Compte suspendu avec succès !');
    }
  };

  return (
    <>
      <Menu />
      <div className="admin-space">
        <div className="container py-5">
          <h1 className="text-center text-success mb-5">Espace Administrateur</h1>

          {/* Section Statistiques */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                  <h3 className="mb-0">📊 Statistiques de la plateforme</h3>
                </div>
                <div className="card-body">
                  {/* Total des crédits */}
                  <div className="alert alert-info text-center mb-4">
                    <h4>Crédits totaux gagnés par la plateforme</h4>
                    <h2 className="text-success fw-bold">{stats.totalCredits} crédits</h2>
                  </div>

                  <div className="row">
                    {/* Graphique Covoiturages par jour */}
                    <div className="col-md-6 mb-4">
                      <div className="card border-success">
                        <div className="card-header bg-light">
                          <h5>Covoiturages par jour</h5>
                        </div>
                        <div className="card-body">
                          <div className="chart-container">
                            {stats.covoituragesParJour.map((item, index) => (
                              <div key={index} className="chart-bar mb-2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <span className="chart-label">{item.date}</span>
                                  <span className="badge bg-success">{item.count}</span>
                                </div>
                                <div className="progress" style={{ height: '25px' }}>
                                  <div 
                                    className="progress-bar bg-success" 
                                    style={{ width: `${(item.count / 30) * 100}%` }}
                                  >
                                    {item.count} trajets
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Graphique Crédits par jour */}
                    <div className="col-md-6 mb-4">
                      <div className="card border-success">
                        <div className="card-header bg-light">
                          <h5>Crédits gagnés par jour</h5>
                        </div>
                        <div className="card-body">
                          <div className="chart-container">
                            {stats.creditsParJour.map((item, index) => (
                              <div key={index} className="chart-bar mb-2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <span className="chart-label">{item.date}</span>
                                  <span className="badge bg-warning text-dark">{item.credits}</span>
                                </div>
                                <div className="progress" style={{ height: '25px' }}>
                                  <div 
                                    className="progress-bar bg-warning" 
                                    style={{ width: `${(item.credits / 60) * 100}%` }}
                                  >
                                    {item.credits} crédits
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Création d'employé */}
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto">
              <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                  <h3 className="mb-0">👤 Créer un compte employé</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleCreateEmployee}>
                    <div className="mb-3">
                      <label className="form-label">Pseudo</label>
                      <input 
                        type="text" 
                        className="form-control"
                        value={newEmployee.pseudo}
                        onChange={(e) => setNewEmployee({...newEmployee, pseudo: e.target.value})}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control"
                        value={newEmployee.email}
                        onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Mot de passe</label>
                      <input 
                        type="password" 
                        className="form-control"
                        value={newEmployee.password}
                        onChange={(e) => setNewEmployee({...newEmployee, password: e.target.value})}
                        minLength="8"
                        required
                      />
                      <small className="text-muted">Minimum 8 caractères</small>
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                      Créer l'employé
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Section Gestion des comptes */}
          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                  <h3 className="mb-0">🔒 Gestion des comptes</h3>
                </div>
                <div className="card-body">
                  <ul className="nav nav-tabs mb-3" role="tablist">
                    <li className="nav-item">
                      <button 
                        className="nav-link active" 
                        data-bs-toggle="tab" 
                        data-bs-target="#users"
                      >
                        Utilisateurs
                      </button>
                    </li>
                    <li className="nav-item">
                      <button 
                        className="nav-link" 
                        data-bs-toggle="tab" 
                        data-bs-target="#employees"
                      >
                        Employés
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content">
                    {/* Onglet Utilisateurs */}
                    <div className="tab-pane fade show active" id="users">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead className="table-light">
                            <tr>
                              <th>ID</th>
                              <th>Pseudo</th>
                              <th>Email</th>
                              <th>Statut</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>john_doe</td>
                              <td>john@example.com</td>
                              <td><span className="badge bg-success">Actif</span></td>
                              <td>
                                <button 
                                  className="btn btn-sm btn-danger"
                                  onClick={() => handleSuspendAccount(1, 'utilisateur')}
                                >
                                  Suspendre
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>marie_martin</td>
                              <td>marie@example.com</td>
                              <td><span className="badge bg-danger">Suspendu</span></td>
                              <td>
                                <button className="btn btn-sm btn-success">
                                  Réactiver
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Onglet Employés */}
                    <div className="tab-pane fade" id="employees">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead className="table-light">
                            <tr>
                              <th>ID</th>
                              <th>Pseudo</th>
                              <th>Email</th>
                              <th>Statut</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>employe_1</td>
                              <td>employe1@ecoride.fr</td>
                              <td><span className="badge bg-success">Actif</span></td>
                              <td>
                                <button 
                                  className="btn btn-sm btn-danger"
                                  onClick={() => handleSuspendAccount(1, 'employé')}
                                >
                                  Suspendre
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EspaceAdmin;