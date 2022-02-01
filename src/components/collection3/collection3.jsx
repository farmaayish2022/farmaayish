import React,{useLayoutEffect, useRef} from "react";
import {gsap,Power3} from 'gsap'
import { ScrollTrigger } from "gsap/all";

import './collection3.scss'

gsap.registerPlugin(ScrollTrigger)

const Collection3 = () => {
    const ref = useRef(null)
    useLayoutEffect(()=>{
        if(ref){
            let tl = gsap.timeline({
                scrollTrigger:{
                    trigger: '.collection3',
                    }
                })
                tl.from('#pic1',0.9,{opacity: 0,y:-500,ease: Power3.easeOut })
                tl.from('#pic2',0.9,{opacity: 0,x:-500,ease: Power3.easeOut },0.5)
        }
    },[])
    return(
        <div className="collection3" ref={ref}>
            <h1>GOLD GALLORE</h1>
            <div className="picture"><img id="pic1" src="https://i.ibb.co/wYrbY3L/Golden-heart.webp" alt="gold-necklace" /></div>
            <div className="picture"><img id="pic2" src="https://i.ibb.co/dtgg32v/Model-with-Necklace.webp" alt="model-with-necklace" /></div>
        </div>
    )
}

export default Collection3