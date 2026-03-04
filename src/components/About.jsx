import React from 'react';
import { CheckCircle2, Factory, Globe, Shield, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const features = [
        {
            icon: <Globe size={32} className="text-gold" />,
            title: "Réseau de Fabricants",
            description: "Importateur direct collaborant avec de multiples fabricants de premier plan en Chine."
        },
        {
            icon: <Shield size={32} className="text-gold" />,
            title: "Qualité Assurée",
            description: "Équipements et pièces rigoureusement sélectionnés pour répondre aux standards de l'industrie minière."
        },
        {
            icon: <Wrench size={32} className="text-gold" />,
            title: "Solutions Complètes",
            description: "Des pièces hydrauliques aux composants moteurs, nous fournissons l'intégralité de vos besoins."
        },
        {
            icon: <Factory size={32} className="text-gold" />,
            title: "Multi-marques",
            description: "Support pour Caterpillar, Komatsu, Hitachi, Volvo, Doosan, et Hyundai."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="about-grid items-center mb-12">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="about-content"
                    >
                        <h2 className="section-title">Présentation de l'Entreprise</h2>
                        <div className="title-underline"></div>

                        <p className="about-lead">
                            Afrique Globale Industrie est un importateur direct spécialisé dans la fourniture d'équipements et de pièces détachées pour machines minières et industrielles.
                        </p>

                        <p className="about-text">
                            Basés sur un solide réseau de fabricants en Chine, nous supprimons les intermédiaires pour vous offrir des <strong>solutions complètes directes d'usine</strong>. Notre expertise couvre une large gamme de marques mondiales, garantissant que vos opérations ne subissent jamais de temps d'arrêt prolongés.
                        </p>

                        <ul className="about-checks">
                            <motion.li variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><CheckCircle2 color="var(--color-gold)" size={20} /> Importateur Direct (Direct China Importer)</motion.li>
                            <motion.li variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}><CheckCircle2 color="var(--color-gold)" size={20} /> Solutions pour machines minières et industrielles</motion.li>
                            <motion.li variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}><CheckCircle2 color="var(--color-gold)" size={20} /> Qualité certifiée et garantie</motion.li>
                            <motion.li variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}><CheckCircle2 color="var(--color-gold)" size={20} /> Support multimarques Premium</motion.li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="about-image-wrapper"
                    >
                        <img src="/gallery/img_50.jpeg" alt="Équipements et Machinerie AGI" className="about-image" />
                    </motion.div>

                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="about-features"
                >
                    {features.map((feature, index) => (
                        <motion.div variants={itemVariants} key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
