import React from 'react';
import './style.css';
import Gambar1 from '../../assets/images/products/pvc/jam1.jpeg'

const index = (props) => {
    return (
        <div className="col-sm-12 col-md-4">
            <div className="card product-card-static-3column">
                <img src={Gambar1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default index