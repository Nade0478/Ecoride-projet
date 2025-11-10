import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Menu from '../../components/Classic/Menu';
import Footer from '../../components/Classic/Footer';
import '../../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // Simulation d'appel API - À remplacer par ton vrai appel
            // const response = await fetch('/api/auth/login', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email, password })
            // });

            // Simulation
            setTimeout(() => {
                console.log('Email:', email);
                console.log('Password:', password);

                // Simuler une connexion réussie
                // Tu devras gérer l'authentification ici (JWT, session, etc.)
                localStorage.setItem('user', JSON.stringify({ email }));
                
                // Rediriger selon le rôle
                // if (user.role === 'admin') navigate('/admin');
                // else if (user.role === 'employe') navigate('/employe');
                // else navigate('/utilisateur');
                
                navigate('/utilisateur');
                setIsLoading(false);
            }, 1000);

        } catch (err) {
            setError('Email ou mot de passe incorrect');
            setIsLoading(false);
        }
    };

    return (
        <>
            <Menu />
            <div className="login-page">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7">
                            <div className="login-card card shadow-lg">
                                <div className="card-body p-5">
                                    {/* Logo et titre */}
                                    <div className="text-center mb-4">
                                        <div className="logo-circle mx-auto mb-3">
                                            <span className="fs-1">🚗</span>
                                        </div>
                                        <h2 className="text-success fw-bold mb-2">Bienvenue sur EcoRide</h2>
                                        <p className="text-muted">Connectez-vous à votre compte</p>
                                    </div>

                                    {/* Message d'erreur */}
                                    {error && (
                                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                            {error}
                                            <button 
                                                type="button" 
                                                className="btn-close" 
                                                onClick={() => setError('')}
                                            ></button>
                                        </div>
                                    )}

                                    {/* Formulaire */}
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label fw-bold">
                                                📧 Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="votre.email@exemple.com"
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="password" className="form-label fw-bold">
                                                🔒 Mot de passe
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control form-control-lg"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="••••••••"
                                                required
                                            />
                                            <div className="text-end mt-2">
                                                <Link to="/mot-de-passe-oublie" className="text-success small">
                                                    Mot de passe oublié ?
                                                </Link>
                                            </div>
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="btn btn-success btn-lg w-100 mb-3"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                                    Connexion...
                                                </>
                                            ) : (
                                                'Se connecter'
                                            )}
                                        </button>

                                        <div className="text-center">
                                            <p className="text-muted mb-0">
                                                Pas encore de compte ?{' '}
                                                <Link to="/inscription" className="text-success fw-bold">
                                                    Inscrivez-vous
                                                </Link>
                                            </p>
                                        </div>
                                    </form>

                                    {/* Divider */}
                                    <div className="divider my-4">
                                        <span className="divider-text text-muted">ou</span>
                                    </div>

                                    {/* Connexion demo */}
                                    <div className="demo-accounts">
                                        <p className="text-center text-muted small mb-3">
                                            <strong>Comptes de démonstration :</strong>
                                        </p>
                                        <div className="d-grid gap-2">
                                            <button 
                                                type="button"
                                                className="btn btn-outline-success btn-sm"
                                                onClick={() => {
                                                    setEmail('utilisateur@demo.com');
                                                    setPassword('demo123');
                                                }}
                                            >
                                                👤 Utilisateur
                                            </button>
                                            <button 
                                                type="button"
                                                className="btn btn-outline-warning btn-sm"
                                                onClick={() => {
                                                    setEmail('employe@demo.com');
                                                    setPassword('demo123');
                                                }}
                                            >
                                                👔 Employé
                                            </button>
                                            <button 
                                                type="button"
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={() => {
                                                    setEmail('admin@demo.com');
                                                    setPassword('demo123');
                                                }}
                                            >
                                                ⚙️ Administrateur
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message informatif */}
                            <div className="text-center mt-4">
                                <p className="text-muted small">
                                    En vous connectant, vous acceptez nos{' '}
                                    <Link to="/mentions-legales" className="text-success">
                                        conditions d'utilisation
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;