import React from 'react';
import './Brands.css';

const Brands = () => {
    const brands = [
        { name: 'Caterpillar', support: 'Compatible Parts' },
        { name: 'Komatsu', support: 'Parts Support' },
        { name: 'Hitachi', support: 'Parts Support' },
        { name: 'Volvo', support: 'Construction Equipment' },
        { name: 'Doosan', support: 'Parts Support' },
        { name: 'Hyundai', support: 'Parts Support' }
    ];

    return (
        <section id="brands" className="section brands bg-dark">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title text-center" style={{ textAlign: 'center' }}>Marques Supportées</h2>
                    <div className="title-underline mx-auto" style={{ margin: '0 auto 2rem auto' }}></div>
                    <p className="brands-subtitle text-center" style={{ textAlign: 'center', color: 'var(--color-gray)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                        Nous fournissons des pièces de rechange compatibles pour les plus grandes marques mondiales d'équipements lourds.
                    </p>
                </div>

                <div className="brands-grid">
                    {brands.map((brand, index) => (
                        <div key={index} className="brand-card">
                            <div className="brand-name">{brand.name}</div>
                            <div className="brand-support">{brand.support}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
