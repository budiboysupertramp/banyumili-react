import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/tentang-kami';
import Kontak from './pages/kontak';
import ProductOrnament from './pages/produk/ornamen';
import ProductSipil from './pages/produk/sipil';

const RouteURL = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tentang-kami" element={<About />} />
            <Route path="produk-ornamen" element={<ProductOrnament />} />
            <Route path="produk-sipil" element={<ProductSipil />} />
            <Route path="kontak" element={<Kontak />} />
        </Routes>
    )
}

export default RouteURL
