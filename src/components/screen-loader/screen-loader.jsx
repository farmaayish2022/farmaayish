import React,{useLayoutEffect} from "react";
import { gsap,Power3 } from "gsap";

import './screen-loader.scss'

const ScreenLoader = () => {
    let tl = new gsap.timeline()
    useLayoutEffect(()=>{
        tl.from('.bg',3,{y:-600,ease: Power3.easeOut})
        .from('.heading',2,{y:120, skewY: 10, ease: Power3.easeInOut },1.5)
        .from('.sub-text',2,{y:90, ease: Power3.easeInOut},2.5)
    },[tl])
    return(
        <div className="loader">
            <div className="bg">
                <div className="title"><h1 className="heading">FARMAAYISH</h1></div>
                <div className="sub-heading">
                    <p className="sub-text">&#8212;Khwayish o ke pankh&#8212;</p>
                </div>
            </div>   
        </div>
    )
}

export default ScreenLoader