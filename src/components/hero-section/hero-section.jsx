import React,{useLayoutEffect, useRef} from "react";
import {gsap,Power3} from 'gsap'
import {ArrowSmDownIcon} from '@heroicons/react/solid'

import './hero-section.scss';

const HeroSection = () => {
    const ref = useRef(null)
    useLayoutEffect(()=>{
        if(ref){
            let tl = gsap.timeline()
                tl.from('.hero-img',3,{opacity: 0,y:1000,ease: Power3.easeOut })
                tl.from('.title',2,{opacity: 0,x:-500,ease: Power3.easeOut },2)
                tl.from('.perfect',2,{opacity: 0,x:-500,ease: Power3.easeOut },3)
        }
    },[])
    return(
        <>
        
             <div className="hero-section">

                <div className="hero-img" id="hero-image" ref={ref}></div> 

                <div className="content">
                    <h1 className="title">Delivering your <br/>Desires</h1>
                    <p className="perfect">Get the perfect jewellery for the <br/>unique you!</p>
                </div>

                <div className="discover">
                    <p>DISCOVER</p>
                    <div className="discover-icon">
                        <ArrowSmDownIcon />
                    </div>
                </div>

            </div> 
        
        </>
        
         
    )
    
    
}

export default HeroSection