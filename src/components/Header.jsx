import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Présentation', href: '/presentation' },
        { name: 'Produits', href: '/produits' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src={logo} alt="Afrique Globale Industrie" className="logo-img" />
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.href} className="nav-link">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact" className="btn btn-primary nav-cta">Demander un Devis</Link>
                </nav>

                {/* Mobile menu toggle */}
                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} className="menu-icon" /> : <Menu size={28} className="menu-icon" />}
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name} onClick={() => setMobileMenuOpen(false)}>
                            <Link to={link.href} className="mobile-nav-link">{link.name}</Link>
                        </li>
                    ))}
                    <li onClick={() => setMobileMenuOpen(false)}>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Demander un Devis</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
