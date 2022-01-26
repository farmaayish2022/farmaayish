import React,{useLayoutEffect,useEffect,useRef} from "react";
import { gsap,Power3 } from "gsap";

import './shop.scss'

import ItemsPreview from "../preview-items/preview-items";
import FeaturesSection from "../features/features";
import SHOP_DATA from "../../data";

const ShopPage = () => {

    let tl = new gsap.timeline()
    useLayoutEffect(()=>{
        tl.from('.shop-heading',1,{opacity: 0,y:50,ease: Power3.easeOut },0.2)
        .from('.items-preview',1,{x: 200, opacity: 0,ease: Power3.easeOut })
    },[])
    
    return(
    <div className="shop">
        
        <div className="shop-heading">
            <p>EXPLORE</p>
            <h1>ESHOP</h1>
        </div>

        <div className="items-preview">
            {SHOP_DATA.map(({id, ...otherProps}) => (
                <ItemsPreview key={id} {...otherProps}/>
            ))}
        </div>
        
        <FeaturesSection/>

    </div>
    )
}

export default ShopPage