import React from "react";

import './collection-showcase.scss'
import {ReactComponent as CircleSvg} from './Circle.svg';

const CollectionShowcase = () => {
    const d = new Date();
    let year = d.getFullYear();
    return(
        <div className="collection-showcase">
            <section className="collection-category">
                <div className="image-frame">
                    <img src="https://i.ibb.co/QcZGJy3/Timeless.webp" alt="mystique-image" />
                </div>
                <div className="heading">
                    <h1>MYSTIQUE</h1>
                    <p>&#8212;exceptional</p>
                </div>
                <div className="company-name">
                    <h4>Farmaayish</h4>
                    <p>{year}</p>
                </div>
                <div className="category-name">
                    <h4>Rings</h4>
                    <p>Contoured black<br/>collections</p>
                </div>
                <div className="collection-brief">
                    <p>Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit.<br/>
                    Suspendisse id leo at velit suscipit<br/>
                    viverra at ac nisi. Sed ac<br/>
                    sem sapien. Curabitur ullamcorper<br/> 
                    facilisis nunc.</p>
                </div>
                <CircleSvg className="circle-svg"/>
                <div className="bottom-links">
                    <p>Collections &#8212;</p>
                    <p>Rings</p>
                    <p>Jewellery Fiesta</p>
                </div>
            </section>
            
        </div>
    )
}

export default CollectionShowcase