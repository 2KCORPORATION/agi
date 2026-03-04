import React from 'react';
import { CreditCard, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
    const paymentMethods = [
        "Mobile Money (selon pays client)",
        "Virement bancaire",
        "Paiement progressif selon accord commercial",
        "Autres méthodes selon les besoins du client"
    ];

    return (
        <section id="services" className="section services">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title text-center" style={{ textAlign: 'center' }}>Services & Paiements</h2>
                    <div className="title-underline mx-auto" style={{ margin: '0 auto 3rem auto' }}></div>
                </motion.div>

                <div className="services-grid">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="service-card"
                    >
                        <div className="service-image">
                            <img src="/gallery/img_45.jpeg" alt="Livraison Rapide" />
                        </div>
                        <div className="service-icon-wrapper">
                            <Truck size={40} className="text-gold" />
                        </div>
                        <h3 className="service-title">Livraison Rapide</h3>
                        <p className="service-desc text-gray">
                            Nous comprenons que chaque jour d'arrêt de vos machines vous coûte cher. C'est pourquoi nous optimisons notre chaîne logistique.
                        </p>
                        <div className="service-highlight text-light">
                            <strong>Délais moyens :</strong> ~21 jours après la date d'envoi pour les pièces standards (pompes, composants, pièces non volumineuses).
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="service-card"
                    >
                        <div className="service-image">
                            <img src="/gallery/img_46.jpeg" alt="Paiements Flexibles" />
                        </div>
                        <div className="service-icon-wrapper">
                            <CreditCard size={40} className="text-gold" />
                        </div>
                        <h3 className="service-title">Paiements Flexibles</h3>
                        <p className="service-desc text-gray">
                            Pour faciliter vos transactions et sécuriser vos commandes à l'international, nous proposons plusieurs méthodes adaptées :
                        </p>
                        <ul className="payment-methods">
                            {paymentMethods.map((method, index) => (
                                <li key={index}>
                                    <span className="payment-dot"></span>
                                    {method}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Services;
