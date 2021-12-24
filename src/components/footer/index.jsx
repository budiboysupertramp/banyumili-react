import React from 'react'
import './style.css';
import Logo from '../../assets/images/logo.png'

const index = () => {
    return (
        <section className="footer">
            <div className="container pt-5 text-white">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <div className="img-footer">
                            <img src={Logo} alt="" srcset="" className="logo-footer" />
                            <p className="content-footer py-3">
                            Mewujudkan impian dan harapan Anda untuk memberikan Nilai Estetika Rumah Anda. Jl. Saibun RT. 11 RW. 04 Susukan Ciracas Jakarta Timur 13750 Telp. 000000000
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 d-flex justify-content-around">
                        <div className="menu-footer">
                            <h3 className="menu-footer-title mb-4">Sosial Media</h3>
                            <p className="title-footer">Instagram</p>
                            <p className="title-footer">Facebook</p>
                            <p className="title-footer">Twitter</p>
                            <p className="title-footer">Email</p>
                        </div>
                        <div className="menu-footer">
                            <h3 className="menu-footer-title mb-4">Marketplace</h3>
                            <p className="title-footer">Shopee</p>
                            <p className="title-footer">Tokopedia</p>
                            <p className="title-footer">Buka Lapak</p>
                        </div>
                        <div className="menu-footer">
                            <h3 className="menu-footer-title mb-4">Menu</h3>
                            <p className="title-footer">Home</p>
                            <p className="title-footer">About</p>
                            <p className="title-footer">Product</p>
                            <p className="title-footer">Contact</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <div className="menu-footer d-flex justify-content-center">
                            <button className="btn btn-whatsapp btn-success p-3 fs-4 d-flex"><i className="fab fa-whatsapp"></i> <span>WhatsApp</span></button>
                        </div>
                    </div>
                </div>
                <div className="row copyright-container">
                    <div className="col-sm-12 col-md-12">
                        <h4 class="copyright-text text-center text-white">@BANYUMILI |2021</h4>
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default index
