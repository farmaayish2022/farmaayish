import React from "react";

import './collection2.scss'

const Collection2 = () => {
    return(
        <div className="collection2">
            <h1>MORE<br/>COLLECTIONS</h1>
            <div className="collections">
                
                <div className="collection">
                    <img src="https://i.ibb.co/2csS1X0/Symphony.webp" alt="Symphony" />
                    <p>SYMPHONY</p>
                </div>
                
                <div className="collection">
                    <img src="https://i.ibb.co/t2dVwM0/Cosmos.webp" alt="Cosmos" />
                    <p>COSMOS</p>
                </div>
                
                <div className="collection">
                    <img src="https://i.ibb.co/QcZGJy3/Timeless.webp" alt="Timeless" />
                    <p>TIMELESS</p>
                </div>

            </div>
        </div>
    )
}

export default Collection2