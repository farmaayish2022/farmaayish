import React from "react";

import './item-card.scss'

const ItemCard = ({imageUrl}) => {
    return(
        <div className="item-card">
            <img src={imageUrl}></img>
        </div>
    )
}

export default ItemCard