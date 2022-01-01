import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './productItem.scss'

import FeaturesSection from "../features/features";

import SHOP_DATA from "../../data";

const ProductItem = () => {
    const params = useParams()
    const [imageUrl, setImageUrl] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    useEffect(()=>{
        
        const{categoryId,productId} = params
        const getCategory = (category) => {
            return category.title == categoryId
        }

        const getProduct = (product) => {
            return product.name == productId
        }
        
        const details = SHOP_DATA.filter(getCategory)[0].items.filter(getProduct)[0]
        setImageUrl(details.imageUrl)
        setName(details.name)
        setPrice(details.price)

    },[])

    return(
        <div className="product-page">
            <div className="product">
                <div className="product-img">
                    <img src={`${imageUrl}`} alt="product-image" />
                </div>
                
                <div className="product-text">
                    <h1>{name}</h1> 
                    <p>Sed eu elit ut nulla maximus tempus. Nulla nec<br/> turpis rhoncus, bibendum nisl sit amet, maximus<br/> nisi. Sed viverra risus tincidunt neque fermentum<br/> gravida. Pellentesque bibendum, massa ut tempor mattis,<br/> nisi mi congue nisl.</p>
                    <button><span>Place Order - {price}</span></button>
                    <h4>Need help? +917687026543</h4>
                </div>
            </div>
            <FeaturesSection/>
        </div>
       
    )
}

export default ProductItem