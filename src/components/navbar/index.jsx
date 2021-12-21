import React from 'react'
import './style.css';
import Logo from '../../assets/images/logo.png'

const index = () => {
    return (
        <header class="header">
            <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <img src={ Logo } alt="" class="navbar-brand" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item fw-bold">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link" href="./about.html">About</a>
                            </li>
                            <li class="nav-item dropdown fw-bold">
                                <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Product
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item fw-bold" href="./productListOrnamen.html">Ornamen Bangunan</a></li>
                                    <li><a class="dropdown-item fw-bold" href="./productListSipil.html">Sipil & Bangunan</a></li>
                                    <li><a class="dropdown-item fw-bold" href="./productDetail.html">Product Detail</a></li>
                                </ul>
                            </li>
                            <li class="nav-item fw-bold">
                            <a class="nav-link" href="./kontak.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default index
