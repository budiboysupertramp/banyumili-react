import React from 'react'
import HeroInner from '../../components/hero-inner'
import HeaderIntroInner from '../../components/header-intro-inner'

const index = () => {
    return (
        <>
            <HeroInner title="About" />
            <section className="bg-section-theme-color">
                <div className="container">
                    <HeaderIntroInner 
                        title="Banyumili Ornamen"
                        description="Banyumili Ornamen58 bergerak di bidang Bangunan dan Pelengkap Arsitektual, Mewujudkan impian dan harapan Anda untuk memberikan Nilai Estetika Rumah Anda. Adapun cangkupan kami, bisa dipelajari lebih lanjut dihalaman-halaman berikutnya."
                    />
                </div>
            </section>
        </>
    )
}

export default index
