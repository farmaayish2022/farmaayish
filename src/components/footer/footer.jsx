import React from "react";

import './footer.scss'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className="footer">
            <div className="social-icons">
                <p><i className="fab fa-facebook-f"></i>Facebook</p>
                <p><i className="fab fa-instagram"></i>Instagram</p>
                <p><i className="fab fa-twitter"></i>Twitter</p>
            </div>
            <div className="contact-us">
                <p>farmaayishofficial@gmail.com</p>
                <p>+919752365923</p>
            </div>
            <p className="copyright">{year} &#169; Farmaayish </p>
        </div>
    )
}

export default Footer