import React, { useState, useEffect } from 'react';
import Menu from '../../components/Classic/Menu';
import Footer from '../../components/Classic/Footer';
import CreateEmployeeForm from '../../components/Admin/CreateEmployeeForm';
import StatisticsCharts from '../../components/Admin/StatisticsCharts';
import CreditsSummary from '../../components/Admin/CreditsSummary';
import AccountManagement from '../../components/Admin/AccountManagement';
import '../../styles/EspaceAdmin.css';

const EspaceAdmin = () => {
  const [stats, setStats] = useState({
    totalCredits: 0,
    covoituragesParJour: [],
    creditsParJour: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStatistics();
  }, []);

  const loadStatistics = async () => {
    setLoading(true);
    try {
      // Simulation d'appel API
      // const response = await fetch('/api/admin/statistics');
      // const data = await response.json();

      setTimeout(() => {
        const mockData = {
          totalCredits: 2450,
          covoituragesParJour: [
            { date: '2025-11-05', count: 15 },
            { date: '2025-11-06', count: 22 },
            { date: '2025-11-07', count: 18 },
            { date: '2025-11-08', count: 25 },
            { date: '2025-11-09', count: 30 },
            { date: '2025-11-10', count: 28 },
            { date: '2025-11-11', count: 32 }
          ],
          creditsParJour: [
            { date: '2025-11-05', credits: 30 },
            { date: '2025-11-06', credits: 44 },
            { date: '2025-11-07', credits: 36 },
            { date: '2025-11-08', credits: 50 },
            { date: '2025-11-09', credits: 60 },
            { date: '2025-11-10', credits: 56 },
            { date: '2025-11-11', credits: 64 }
          ]
        };

        setStats(mockData);
        setLoading(false);
      }, 1000);

    } catch (error) {
      console.error('Erreur lors du chargement des statistiques:', error);
      setLoading(false);
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
          <p className="mt-3 text-muted">Chargement des statistiques...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Menu />
      <div className="espace-admin-page">
        <div className="container py-5">
          {/* En-tête */}
          <div className="admin-header mb-5">
            <h1 className="text-success mb-2">⚙️ Espace Administrateur</h1>
            <p className="text-muted">
              Gérez la plateforme EcoRide et supervisez l'activité
            </p>
          </div>

          {/* Total des crédits */}
          <CreditsSummary totalCredits={stats.totalCredits} />

          {/* Statistiques - Graphiques */}
          <div className="mb-5">
            <h3 className="text-success mb-4">📊 Statistiques de la plateforme</h3>
            <StatisticsCharts stats={stats} />
          </div>

          {/* Création d'employé */}
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto">
              <CreateEmployeeForm />
            </div>
          </div>

          {/* Gestion des comptes */}
          <div className="mb-5">
            <AccountManagement />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EspaceAdmin;