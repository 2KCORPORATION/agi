import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
    const [visibleCount, setVisibleCount] = useState(12);
    const totalImages = 80;

    // Generate array of image paths
    const images = Array.from({ length: totalImages }, (_, i) => `/gallery/img_${i + 1}.jpeg`);

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 12, totalImages));
    };

    return (
        <section id="gallery" className="section gallery">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title text-center" style={{ textAlign: 'center' }}>Galerie de Nos Équipements</h2>
                    <div className="title-underline mx-auto" style={{ margin: '0 auto 2rem auto' }}></div>
                    <p className="gallery-subtitle text-center" style={{ textAlign: 'center', color: 'var(--color-gray)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                        Découvrez un aperçu concret de notre stock et des équipements que nous fournissons.
                    </p>
                </motion.div>

                <motion.div
                    layout
                    className="gallery-grid"
                >
                    <AnimatePresence>
                        {images.slice(0, visibleCount).map((src, index) => (
                            <motion.div
                                key={src}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className="gallery-item"
                            >
                                <img src={src} alt={`Équipement AGI ${index + 1}`} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span className="gallery-plus">+</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {visibleCount < totalImages && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-center"
                        style={{ textAlign: 'center', marginTop: '3rem' }}
                    >
                        <button onClick={loadMore} className="btn btn-outline btn-lg">
                            Voir Plus d'Images
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
