import React from 'react'
import Hero from '../../components/hero'
import HeaderIntro from '../../components/header-intro'
import FeaturedPropertiesCounter from '../../components/featured-properties-counter'
import SectionTitle from '../../elements/section-title';
import ProductCardList from '../../components/product-card-list'
import PropertyType from '../../components/property-type'
import Motto from '../../components/motto'
import Testimonial from '../../components/testimonial'

const index = () => {
    return (
        <>
            <Hero />
            <section className="bg-section-theme-color">
                <div className="container">
                    <HeaderIntro />
                    <FeaturedPropertiesCounter />
                    <SectionTitle type="light" title="Feature Properties" />
                    <ProductCardList />
                </div>
            </section>
            <PropertyType />
            <Motto />
            <Testimonial />
        </>
    )
}

export default index
