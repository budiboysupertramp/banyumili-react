import React from 'react';
import './style.css'

const index = (props) => {
    return (
        <div className="row">
            <div className="section-title text-center">
                <div className="col-md-12">
                    <h1 className={"section-title-text section-title-" + props.type}>{props.title}</h1>
                    <div className="divider mx-auto bg-warning"></div>
                </div>
            </div>
        </div>
    )
}

export default index
