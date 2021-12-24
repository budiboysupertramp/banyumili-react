import React from 'react'
import './style.css'
import SectionTitle from '../../elements/section-title'
import TestimonialClientCard from '../../elements/testimonial-client-card'

const index = () => {
    return (
        <section className="client-testimonials">
            <div className="container">
                <SectionTitle type="dark" title="What Our Clients Say"/>
            </div>
            <div className="container">
                <div className="row testimonial-list">
                    <TestimonialClientCard />
                    <TestimonialClientCard />
                    <TestimonialClientCard />
                    <div className="element-background">
                        <div className="element-background-color">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index
