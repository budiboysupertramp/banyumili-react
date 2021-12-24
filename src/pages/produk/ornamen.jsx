import React from 'react'
import HeroInner from '../../components/hero-inner'
import HeaderIntroInner from '../../components/header-intro-inner'
import SectionTitle from '../../elements/section-title';
import CuttingPlatCategory from '../../components/product-category-cutting-plat-card-list'
import CNCRouterCategory from '../../components/product-category-cnc-router-card-list'

const index = () => {
    return (
        <>
            <HeroInner title="Produk Ornamen" />
            <section className="bg-section-theme-color">
                <div className="container">
                    <HeaderIntroInner 
                        title="Produk Ornamen"
                        description="Banyumili Ornamen 58 juga melayani jasa produk Arstitektural yang sifatnya Partial atau bisa juga disebut tambahan/Pelengkap. Produk ini melengkapi kebutuhan bangunan secara Arsitektural. 
                        Produk ini bersifat Ornamental."
                    />
                </div>
                <div className="container mt-5">
                    <SectionTitle type="light" title="Feature Properties" />
                    <CuttingPlatCategory />
                    <SectionTitle type="light" title="CNC Router" />
                    <CNCRouterCategory />
                </div>
            </section>
        </>
    )
}

export default index
