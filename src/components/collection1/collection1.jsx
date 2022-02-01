import React,{useLayoutEffect, useRef} from "react";
import { Link } from "react-router-dom";
import {gsap,Power3} from 'gsap'
import { ScrollTrigger } from "gsap/all";

import './collection1.scss'

gsap.registerPlugin(ScrollTrigger)

const Collection1 = () => {
    const ref = useRef(null)
    useLayoutEffect(()=>{
        if(ref){
            let tl = gsap.timeline({
                scrollTrigger:{
                    trigger: '.collection1'
                    }
                })
                tl.from('.harmony',{duration:1.7,opacity: 0,y:-300,skewY:7,ease: Power3.easeOut })
                .from('.mystique',{duration:1.3,opacity: 0,y:500,skewY:-7,ease: Power3.easeOut },0.5)

        }
    },[])
    return (  
        <div className="collection1" ref={ref}>

            <div className="harmony">
                <div className="harmony-text">
                    <h1>HARMONY</h1>
                    <p>Discover</p>
                </div>
                <Link to='/collections'>
                    <img className="harmony-img" src="https://i.ibb.co/cxLjNz8/Harmony.webp" alt="harmony"/>
                </Link>
            </div>
                        
            <div className="mystique">
                <div className="mystique-text">
                    <h1>MYSTIQUE</h1>
                    <p>Discover</p>
                </div>
                <Link to='/collections'>
                    <img className="mystique-img" src="https://i.ibb.co/3ChRYR2/Mystique.webp" alt="mystique"/>
                </Link>
            </div>

        </div>
    )
}

export default Collection1;