import React from 'react'
import './style.css';
import Logo from '../../assets/images/logo.png'

const index = () => {
    return (
        <header className="header">
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <img src={ Logo } alt="" className="navbar-brand" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item fw-bold">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link" href="./about.html">About</a>
                            </li>
                            <li className="nav-item dropdown fw-bold">
                                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Product
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item fw-bold" href="./productListOrnamen.html">Ornamen Bangunan</a></li>
                                    <li><a className="dropdown-item fw-bold" href="./productListSipil.html">Sipil & Bangunan</a></li>
                                    <li><a className="dropdown-item fw-bold" href="./productDetail.html">Product Detail</a></li>
                                </ul>
                            </li>
                            <li className="nav-item fw-bold">
                            <a className="nav-link" href="./kontak.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default index
