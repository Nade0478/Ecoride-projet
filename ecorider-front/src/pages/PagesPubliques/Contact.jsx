import React, { useState } from 'react';
import Menu from '../../components/Classic/Menu';
import Footer from '../../components/Classic/Footer';
import '../../styles/Contact.css'; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici tu pourras ajouter la logique d'envoi du formulaire
        console.log('Formulaire envoyé:', formData);
        alert('Message envoyé avec succès !');
        // Réinitialiser le formulaire
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Menu />
            <div className="contact-page">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-card card shadow-lg p-4">
                                <h1 className="text-center text-success mb-4">Contactez-nous</h1>
                                <p className="text-center text-muted mb-4">
                                    Une question ? Une suggestion ? N'hésitez pas à nous contacter !
                                </p>
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Nom complet</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="name" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Votre nom"
                                            required
                                        />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="votre.email@exemple.com"
                                            required
                                        />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea 
                                            className="form-control" 
                                            id="message" 
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            placeholder="Votre message..."
                                            required
                                        />
                                    </div>
                                    
                                    <button 
                                        type="submit" 
                                        className="btn btn-success w-100"
                                    >
                                        Envoyer le message
                                    </button>
                                </form>
                            </div>

                            {/* Informations supplémentaires */}
                            <div className="row mt-5">
                                <div className="col-md-6 mb-3">
                                    <div className="card h-100 border-0 shadow-sm p-3">
                                        <div className="card-body text-center">
                                            <h5 className="text-success">📧 Email</h5>
                                            <a href="mailto:contact@ecoride.fr" className="text-decoration-none">
                                                contact@ecoride.fr
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 mb-3">
                                    <div className="card h-100 border-0 shadow-sm p-3">
                                        <div className="card-body text-center">
                                            <h5 className="text-success">⏰ Horaires</h5>
                                            <p className="mb-0">Lundi - Vendredi<br/>9h00 - 18h00</p>
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
};

export default Contact;