import React from 'react';
import './style.css';

const index = () => {
    return (
        <div className="featured-properties-counter bg-white">
            <div className="row text-center">
            
                <div className="featured-properties-caption col-md-4">
                <h3 className="featured-number">2,000</h3>
                <p className="featured-caption">Owned From Property Transaction</p>
                </div>
                <div className="featured-properties-caption col-md-4">
                <h3 className="featured-number">4,500</h3>
                <p className="featured-caption">Owned From Property Transaction</p>
                </div>
                <div className="featured-properties-caption col-md-4">
                <h3 className="featured-number">3,200</h3>
                <p className="featured-caption">Owned From Property Transaction</p>
                </div>
            </div>
        </div>
    )
}

export default index
