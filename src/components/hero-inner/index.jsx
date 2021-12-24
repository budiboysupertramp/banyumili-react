import React from 'react'
import './style.css';
import SectionTitle from '../../elements/section-title'

const index = ({title}) => {
    return (
        <section className="header-intro-inner">
            <div className="container">
            <SectionTitle type="light" title={title} />
            </div>
        </section>
    )
}

export default index
