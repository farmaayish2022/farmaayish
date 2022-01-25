import React from "react"

import './collections.scss'
import CollectionShowcase from "../../components/collection-showcase/collection-showcase"

const CollectionsPage = () => {
    return(
       <div className="background">
            <CollectionShowcase/>
            <div className="brown-circle"></div>
            <div className="white-circle"></div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="yellow-blob">
                <path fill="#FFE9A0" d="M36.6,-48.5C49.6,-40.9,63.8,-33.1,70.3,-21C76.8,-8.8,75.6,7.7,70,22.1C64.4,36.5,54.4,48.9,42.1,53.2C29.7,57.6,14.8,53.9,-1.7,56.3C-18.2,58.6,-36.4,66.9,-50.4,63C-64.4,59.2,-74.2,43.2,-79.4,26C-84.7,8.8,-85.5,-9.6,-78.2,-23.4C-70.9,-37.2,-55.7,-46.4,-41.3,-53.5C-27,-60.6,-13.5,-65.5,-0.8,-64.4C11.8,-63.2,23.6,-56,36.6,-48.5Z" transform="translate(100 100)" />
            </svg>
            <div className="glass"></div>
       </div>
    )
}

export default CollectionsPage