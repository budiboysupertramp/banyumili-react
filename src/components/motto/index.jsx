import React from 'react'
import './style.css'
import SectionTitle from '../../elements/section-title'

const index = () => {
    return (
        <section className="motto bg-section-white">
            <div className="container">
                <SectionTitle type="dark" title="Motto"/>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <h2 className="motto-caption fs-5 text-center">
                        "Mewujudkan Impian Anda Bersama Kami Untuk Memberikan Nilai Estetika Rumah Sesuai Dengan Keinginan Anda"
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index
