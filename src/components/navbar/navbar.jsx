import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import './navbar.scss';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)    
    const {pathname} = useLocation()

    const changeBackground = () => {
        if(window.scrollY >= 300)
            setNavbar(true)
        else
            setNavbar(false)
    }

    useEffect (() => {

        if(pathname=='/' || pathname=='/about' || pathname=='/contact'){
            window.addEventListener('scroll', changeBackground)
            setNavbar(false)
        }
        else{
            setNavbar(true)
        }
        return () => window.removeEventListener('scroll', changeBackground)
            
    },[pathname])

    return(
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <Link to = '/' className={navbar ? 'logo active' : 'logo'}>FARMAAYISH</Link>
            <div className="links">
                <Link to = '/eshop' className={navbar ? 'active' : ''}>Eshop</Link>
                <Link to = '/collections' className={navbar ? 'active' : ''}>Collections</Link>
                <Link to = 'about' className={navbar ? 'active' : ''}>About</Link>
                <Link to = 'contact' className={navbar ? 'active' : ''}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;