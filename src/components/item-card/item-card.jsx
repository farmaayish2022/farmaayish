import React from "react";

import './item-card.scss'

const ItemCard = ({imageUrl}) => {
    return(
        <div className="item-card">
            <img src={imageUrl} alt={imageUrl}></img>
        </div>
    )
}

export default React.memo(ItemCard) 