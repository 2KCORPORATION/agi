import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer bg-dark-alt">
            <div className="container">
                <div className="footer-content">

                    <div className="footer-brand">
                        <Link to="/" className="logo" style={{ marginBottom: '1.5rem', display: 'block' }}>
                            <img src={logo} alt="Afrique Globale Industrie" className="footer-logo-img" />
                        </Link>
                        <p className="footer-desc text-gray">
                            Votre partenaire de confiance pour des équipements miniers et industriels de haute qualité importés directement des meilleurs fabricants pour optimiser vos opérations.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Liens Rapides</h4>
                        <ul>
                            <li><Link to="/presentation">À Propos</Link></li>
                            <li><Link to="/">Marques Supportées</Link></li>
                            <li><Link to="/produits">Catalogue Produits</Link></li>
                            <li><Link to="/services">Services & Logistique</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-title">Demander un Devis</h4>
                        <p className="text-gray mb-4" style={{ marginBottom: '1rem' }}>
                            Nos experts sont disponibles pour étudier vos besoins.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem' }}>
                            Contactez-nous
                        </Link>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Afrique Globale Industrie. Tous droits réservés.</p>
                    <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Retour en haut">
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
