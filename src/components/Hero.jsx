import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-text"
                >
                    <span className="hero-badge">IMPORTATEUR DIRECT CHINE</span>
                    <h1 className="hero-title">
                        Des Solutions <span className="text-gold">Meilleures</span> pour un
                        <br /> Développement Durable
                    </h1>
                    <p className="hero-subtitle">
                        Votre partenaire de confiance pour des équipements miniers et industriels de haute qualité.
                        Nous fournissons des solutions complètes importées directement des meilleurs fabricants pour
                        optimiser vos opérations.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="hero-actions"
                    >
                        <a href="#products" className="btn btn-primary btn-lg flex items-center gap-1">
                            Explorer le Catalogue
                            <ArrowRight size={20} />
                        </a>
                        <a href="/AGI_Catalogue.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg flex items-center gap-1" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                            Télécharger PDF
                            <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="btn btn-outline btn-lg">
                            Contacter l'Équipe
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1, delay: 1 }}
                whileHover={{ opacity: 1, color: "var(--color-gold)" }}
                className="scroll-indicator delay-300"
            >
                <span className="scroll-text">Découvrir AGI</span>
                <ChevronDown size={24} className="scroll-icon" />
            </motion.a>
        </section>
    );
};

export default Hero;
