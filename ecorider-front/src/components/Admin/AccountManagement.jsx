import React, { useState } from 'react';

const AccountManagement = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');

  // Données fictives - À remplacer par des appels API
  const [users, setUsers] = useState([
    { id: 1, pseudo: 'john_doe', email: 'john@example.com', statut: 'actif', credits: 45, membre_depuis: '2024-01-15' },
    { id: 2, pseudo: 'marie_martin', email: 'marie@example.com', statut: 'suspendu', credits: 12, membre_depuis: '2024-03-20' },
    { id: 3, pseudo: 'pierre_durand', email: 'pierre@example.com', statut: 'actif', credits: 78, membre_depuis: '2023-11-05' },
    { id: 4, pseudo: 'sophie_bernard', email: 'sophie@example.com', statut: 'actif', credits: 23, membre_depuis: '2024-05-12' }
  ]);

  const [employees, setEmployees] = useState([
    { id: 1, pseudo: 'employe_1', email: 'employe1@ecoride.fr', statut: 'actif', date_embauche: '2023-06-01' },
    { id: 2, pseudo: 'employe_2', email: 'employe2@ecoride.fr', statut: 'actif', date_embauche: '2024-01-15' },
    { id: 3, pseudo: 'employe_3', email: 'employe3@ecoride.fr', statut: 'suspendu', date_embauche: '2024-04-10' }
  ]);

  const handleSuspendAccount = (id, accountType, currentStatus) => {
    const action = currentStatus === 'actif' ? 'suspendre' : 'réactiver';
    const newStatus = currentStatus === 'actif' ? 'suspendu' : 'actif';
    
    if (window.confirm(`Êtes-vous sûr de vouloir ${action} ce compte ?`)) {
      if (accountType === 'user') {
        setUsers(users.map(user => 
          user.id === id ? { ...user, statut: newStatus } : user
        ));
      } else {
        setEmployees(employees.map(emp => 
          emp.id === id ? { ...emp, statut: newStatus } : emp
        ));
      }
      alert(`Compte ${action === 'suspendre' ? 'suspendu' : 'réactivé'} avec succès !`);
    }
  };

  const filteredUsers = users.filter(user => 
    user.pseudo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredEmployees = employees.filter(emp => 
    emp.pseudo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="account-management card shadow-sm">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">🔒 Gestion des comptes</h5>
      </div>
      <div className="card-body p-4">
        {/* Barre de recherche */}
        <div className="search-bar mb-4">
          <input 
            type="text"
            className="form-control"
            placeholder="🔍 Rechercher par pseudo ou email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Onglets */}
        <ul className="nav nav-tabs mb-4" role="tablist">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              👥 Utilisateurs ({users.length})
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'employees' ? 'active' : ''}`}
              onClick={() => setActiveTab('employees')}
            >
              👔 Employés ({employees.length})
            </button>
          </li>
        </ul>

        {/* Contenu des onglets */}
        <div className="tab-content">
          {/* Onglet Utilisateurs */}
          {activeTab === 'users' && (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Pseudo</th>
                    <th>Email</th>
                    <th>Crédits</th>
                    <th>Membre depuis</th>
                    <th>Statut</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center text-muted py-4">
                        Aucun utilisateur trouvé
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map(user => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>
                          <strong>{user.pseudo}</strong>
                        </td>
                        <td>{user.email}</td>
                        <td>
                          <span className="badge bg-warning text-dark">
                            {user.credits} crédits
                          </span>
                        </td>
                        <td>
                          {new Date(user.membre_depuis).toLocaleDateString('fr-FR')}
                        </td>
                        <td>
                          <span className={`badge ${user.statut === 'actif' ? 'bg-success' : 'bg-danger'}`}>
                            {user.statut === 'actif' ? '✓ Actif' : '✕ Suspendu'}
                          </span>
                        </td>
                        <td>
                          <button 
                            className={`btn btn-sm ${user.statut === 'actif' ? 'btn-danger' : 'btn-success'}`}
                            onClick={() => handleSuspendAccount(user.id, 'user', user.statut)}
                          >
                            {user.statut === 'actif' ? 'Suspendre' : 'Réactiver'}
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Onglet Employés */}
          {activeTab === 'employees' && (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Pseudo</th>
                    <th>Email</th>
                    <th>Date d'embauche</th>
                    <th>Statut</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center text-muted py-4">
                        Aucun employé trouvé
                      </td>
                    </tr>
                  ) : (
                    filteredEmployees.map(emp => (
                      <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>
                          <strong>{emp.pseudo}</strong>
                        </td>
                        <td>{emp.email}</td>
                        <td>
                          {new Date(emp.date_embauche).toLocaleDateString('fr-FR')}
                        </td>
                        <td>
                          <span className={`badge ${emp.statut === 'actif' ? 'bg-success' : 'bg-danger'}`}>
                            {emp.statut === 'actif' ? '✓ Actif' : '✕ Suspendu'}
                          </span>
                        </td>
                        <td>
                          <button 
                            className={`btn btn-sm ${emp.statut === 'actif' ? 'btn-danger' : 'btn-success'}`}
                            onClick={() => handleSuspendAccount(emp.id, 'employee', emp.statut)}
                          >
                            {emp.statut === 'actif' ? 'Suspendre' : 'Réactiver'}
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;