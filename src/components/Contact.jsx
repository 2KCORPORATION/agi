import React from 'react';
import { Mail, MapPin, Phone, User } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="contact-wrapper items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="contact-info"
                    >
                        <h2 className="section-title">Prendre Contact</h2>
                        <div className="title-underline"></div>
                        <p className="contact-subtitle text-gray">
                            Prêt à optimiser l'approvisionnement de vos pièces industrielles ? Notre équipe est à votre disposition pour toute demande de devis ou d'information.
                        </p>

                        <div className="contact-details-list">

                            <div className="contact-item">
                                <div className="contact-icon"><Phone size={24} className="text-gold" /></div>
                                <div className="contact-text">
                                    <span className="contact-label">WhatsApp / Commercial</span>
                                    <a href="tel:+22670108161" className="contact-value">+226 70 10 81 61</a>
                                    <a href="tel:+22678948819" className="contact-value">| +226 78 94 88 19</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon"><Mail size={24} className="text-gold" /></div>
                                <div className="contact-text">
                                    <span className="contact-label">Email</span>
                                    <a href="mailto:korgocheickmohammed549@gmail.com" className="contact-value">korgocheickmohammed549@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon"><User size={24} className="text-gold" /></div>
                                <div className="contact-text">
                                    <span className="contact-label">Responsables</span>
                                    <span className="contact-value"><strong>Paiements:</strong> Tapsoba Inoussa (+226 70 63 17 07)</span>
                                    <span className="contact-value"><strong>Logistique:</strong> Ablasse Bikienga (+226 72 07 76 63)</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon"><MapPin size={24} className="text-gold" /></div>
                                <div className="contact-text">
                                    <span className="contact-label">Bureau Siège (Ouagadougou)</span>
                                    <span className="contact-value">À 300 m de la Grande Mosquée de Ouagadougou</span>
                                    <span className="contact-value">Grand magasin</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon"><MapPin size={24} className="text-gold" /></div>
                                <div className="contact-text">
                                    <span className="contact-label">Bureau Chine</span>
                                    <span className="contact-value"><strong>Responsable:</strong> Cheick Mohammed Korgo</span>
                                    <a href="tel:+8813029339175" className="contact-value"><strong>Tél:</strong> +88 13029339175</a>
                                    <span className="contact-value" style={{ marginTop: '0.5rem', lineHeight: '1.5' }}>
                                        广东省广州市越秀区<br />麓景路老干天厦18楼1807房
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="contact-form-container"
                    >
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <h3 className="form-title">Envoyer un Message</h3>
                            <div className="form-group">
                                <input type="text" placeholder="Votre Nom / Société" className="form-input" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Adresse Email" className="form-input" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Sujet / Pièce recherchée" className="form-input" />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Détails de votre besoin (Marque, Modèle, Référence...)" className="form-input form-textarea"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-submit">
                                Demander un Devis
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
