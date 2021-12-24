import React from 'react';
import './style.css';

const index = (props) => {
    return (
        <div className="header-intro-inner-card">
            <div className="row">
                <div className="col-md-12">
                    <div className="header-intro-inner-card-content">
                        <h3 className="header-title">{props.pre_title}</h3>
                        <h2 className="header-name mb-4">{props.title}</h2>
                        <p className="header-paragraph">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
