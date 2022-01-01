import React from "react";

import './shop.scss'

import ItemsPreview from "../preview-items/preview-items";
import FeaturesSection from "../features/features";
import SHOP_DATA from "../../data";

const ShopPage = () => {
    
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