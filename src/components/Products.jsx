import React from 'react';
import { ArrowRight, Settings, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import './Products.css';

const Products = () => {
    const hydraulicParts = [
        "Pompes hydrauliques",
        "Moteurs hydrauliques",
        "Kits vérins (Cylinder seal kits)",
        "Pistons et composants internes",
        "Tuyaux et connecteurs"
    ];

    const engineParts = [
        "Injecteurs",
        "Filtres (air, huile, carburant)",
        "Turbos (Turbochargers)",
        "Capteurs électroniques",
        "Dents et porte-dents"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    };

    return (
        <section id="products" className="section products">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title text-center" style={{ textAlign: 'center' }}>Catalogue Professionnel</h2>
                    <div className="title-underline mx-auto" style={{ margin: '0 auto 2rem auto' }}></div>
                    <p className="brands-subtitle text-center" style={{ textAlign: 'center', color: 'var(--color-gray)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                        Des pièces de rechange de haute qualité pour maintenir vos équipements opérationnels au maximum de leurs performances.
                    </p>
                </motion.div>

                <div className="products-grid">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="product-category"
                    >
                        <div className="category-image">
                            <img src="/gallery/img_31.jpeg" alt="Pièces Hydrauliques" />
                        </div>
                        <div className="category-header">
                            <div className="category-icon">
                                <Settings size={32} color="var(--color-gold)" />
                            </div>
                            <h3 className="category-title">Pièces Hydrauliques</h3>
                        </div>

                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="product-list"
                        >
                            {hydraulicParts.map((part, index) => (
                                <motion.li variants={itemVariants} key={index} className="product-item">
                                    <ArrowRight size={16} className="text-gold" />
                                    <span>{part}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <a href="#contact" className="btn btn-outline" style={{ marginTop: '2rem' }}>
                            Demander cette gamme
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="product-category"
                    >
                        <div className="category-image">
                            <img src="/gallery/img_70.jpeg" alt="Pièces Moteur & Minières" />
                        </div>
                        <div className="category-header">
                            <div className="category-icon">
                                <Zap size={32} color="var(--color-gold)" />
                            </div>
                            <h3 className="category-title">Pièces Moteur & Minières</h3>
                        </div>

                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="product-list"
                        >
                            {engineParts.map((part, index) => (
                                <motion.li variants={itemVariants} key={index} className="product-item">
                                    <ArrowRight size={16} className="text-gold" />
                                    <span>{part}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <a href="#contact" className="btn btn-outline" style={{ marginTop: '2rem' }}>
                            Demander cette gamme
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Products;
