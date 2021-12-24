import React from 'react';
import SectionTitle from '../../elements/section-title';
import ProductTypeCard from '../../elements/product-type-card'

const index = () => {
    return (
        <section className="property-type bg-section-theme-color">
            <div className="container">
                <SectionTitle type="light" title="Mengapa Anda Harus Memilih Kami?"/>
                <div className="row row-cols-1 row-cols-md-2 g-3">
                    <ProductTypeCard />
                    <ProductTypeCard />
                    <ProductTypeCard />
                    <ProductTypeCard />
                </div>
            </div>
        </section>
    )
}

export default index
