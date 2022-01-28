import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap,Power3,Sine} from "gsap";

import {MenuAlt4Icon} from '@heroicons/react/outline'
import {XIcon} from '@heroicons/react/outline'

import './navbar.scss';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const [mobile, setMobile] = useState(false)   
    const [click, setClick] = useState(false) 
    const {pathname} = useLocation()

    const changeBackground = () => {
        if(window.scrollY >= 300)
            setNavbar(true)
        else
            setNavbar(false)
    }
    useEffect (() => {

        if(pathname==='/' || pathname==='/about' || pathname==='/contact' || pathname==='/collections'){
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
            <div className={mobile ? 'links active' : 'links'}>
                <Link to = '/eshop' className={navbar ? 'active' : ''} 
                    onClick={()=>{setMobile(!mobile); setClick(!click)}}>Eshop</Link>
                <Link to = '/collections' className={navbar ? 'active' : ''}
                    onClick={()=>{setMobile(!mobile); setClick(!click)}}>Collections</Link>
                <Link to = 'about' className={navbar ? 'active' : ''}
                    onClick={()=>{setMobile(!mobile); setClick(!click)}}>About</Link>
                <Link to = 'contact' className={navbar ? 'active' : ''}
                    onClick={()=>{setMobile(!mobile); setClick(!click)}}>Contact</Link>
            </div>
            <div className={navbar ? 'menu-icon active' : 'menu-icon'} onClick=
                {()=>{setClick(!click)
                    setMobile(!mobile)
                    let tl = gsap.timeline()
                    tl.from('.links',{ y:-800, duration:0.01, ease:Power3.easeOut},"-=4")
                }}>
                {click ? <XIcon /> : <MenuAlt4Icon/>}
            </div>
        </nav>
    )
}

export default Navbar;