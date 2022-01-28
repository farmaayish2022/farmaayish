import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {gsap,Power3} from 'gsap'
import { ScrollTrigger } from "gsap/all";

import './collection2.scss'

gsap.registerPlugin(ScrollTrigger)

const Collection2 = () => {
    const ref = useRef(null)
    useLayoutEffect(()=>{
        if(ref){
            let tl = gsap.timeline({
                scrollTrigger:{
                    trigger: '.collection2',
                    }
                })
                tl.from('.collection2-title',{duration:2,opacity: 0,y:100,skewY:7,ease: Power3.easeOut })
                    .from('.collection',{duration: 1.5,stagger:0.3,opacity:0,y:500,ease: Power3.easeOut},1)
        }
    },[])
    return(
        <div className="collection2" ref={ref}>
            <h1 className="collection2-title">MORE<br/>COLLECTIONS</h1>
            <div className="collections">
                
                <div className="collection">
                    <Link to='/collections'>
                        <img src="https://i.ibb.co/2csS1X0/Symphony.webp" alt="Symphony" />
                        <p>SYMPHONY</p>
                    </Link>
                    
                </div>
                
                <div className="collection">
                    <Link to='/collections'>
                        <img src="https://i.ibb.co/t2dVwM0/Cosmos.webp" alt="Cosmos" />
                        <p>COSMOS</p>
                    </Link>    
                </div>
                
                <div className="collection" id="timeless">
                    <Link to='/collections'>
                        <img src="https://i.ibb.co/QcZGJy3/Timeless.webp" alt="Timeless" />
                        <p>TIMELESS</p>
                    </Link> 
                </div>

            </div>
        </div>
    )
}

export default Collection2