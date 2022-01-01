import React from "react";
import {ArrowSmDownIcon} from '@heroicons/react/solid'

import './hero-section.scss';

const HeroSection = () => {
    return(
        <div className="hero-section">

            <div className="hero-img"></div> 

            <div className="content">
                <h1 className="title">Delivering your <br/>Desires</h1>
                <p>Get the perfect jewellery for the <br/>unique you!</p>
            </div>

            <div className="discover">
                <p>DISCOVER</p>
                <div className="discover-icon">
                    <ArrowSmDownIcon />
                </div>
            </div>
        
        </div>
         
    )
    
    
}

export default HeroSection