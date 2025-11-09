import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../Layout/AuthLayout';
import './LoginForm.css';

const LoginForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                // Login
                const response = await axios.post('/api/auth/login', { email, password });
                localStorage.setItem('token', response.data.token);
                navigate('/utilisateur/dashboard');
            } else {
                // Register
                if (password !== confirmPassword) {
                    setError('Les mots de passe ne correspondent pas.');
                    return;
                }
                await axios.post('/api/auth/register', { email, password });
                setIsLogin(true);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Une erreur est survenue.');
        }
    };

    return (
        <AuthLayout>
            <div className="login-form-container">
                <h2>{isLogin ? 'Connexion' : 'Créer un compte'}</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Entrez votre email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Entrez votre mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    {!isLogin && (
                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Confirmer le mot de passe</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirmez votre mot de passe"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                    )}
                    <Button variant="primary" type="submit" className="submit-button">
                        {isLogin ? 'Se connecter' : 'S\'inscrire'}
                    </Button>
                </Form>
                <div className="toggle-link" onClick={toggleForm}>
                    {isLogin ? 'Créer un compte' : 'Déjà un compte ? Connectez-vous'}
                </div>
            </div>
        </AuthLayout>
    );
}
export default LoginForm;
