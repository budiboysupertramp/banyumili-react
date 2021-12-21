import React from 'react'
import Hero from '../../components/hero'
import HeaderIntro from '../../components/header-intro'
import FeaturedPropertiesCounter from '../../components/featured-properties-counter'
import SectionTitle from '../../elements/section-title'

const index = () => {
    return (
        <>
            <Hero />
            <section class="bg-section-theme-color">
                <div class="container">
                    <HeaderIntro />
                    <FeaturedPropertiesCounter />
                    <SectionTitle />
                </div>
            </section>
        </>
    )
}

export default index
