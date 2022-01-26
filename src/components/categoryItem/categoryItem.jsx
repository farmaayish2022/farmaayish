import React, { useEffect, useState, useLayoutEffect } from "react";
import { useParams,Link} from "react-router-dom";

import { gsap,Power3 } from "gsap";

import './categoryItem.scss'

import ItemCard from "../item-card/item-card";
import SHOP_DATA from "../../data";

const CategoryItem = () => {
    const params = useParams()
    const [categoryName, setCategoryName] = useState('')
    const [details,setDetails] = useState([])
    const [categoryNames, setCategoryNames] = useState([])

    let tl = new gsap.timeline()
    useLayoutEffect(()=>{
        tl.from('.category-images',1.5,{opacity: 0,y:500,ease: Power3.easeInOut })
    },[])

    useEffect(() => {
        const{categoryId} = params
        setCategoryName(categoryId)
        const names = ['Rings','Necklaces','Bracelets','Earrings','Bangles']
        setCategoryNames(names.filter(category => category!==categoryId)) 
        const getCategory = (category) => {
            return category.title === categoryId
        }
        const {items} = SHOP_DATA.filter(getCategory)[0]
        setDetails(items)
    },[params.categoryId])

    return(
        <div className="category-page">
            <h1>{categoryName}</h1>
            <div className="other-category-names">
                {categoryNames.map( category => (
                    <Link key={category} to={`/eshop/${category}`} ><p key={category}>{category}</p></Link>
                ))}
            </div>
            <div className="category-images">
                {details.map(item => (
                    <div key={item.id} className="category-img">
                        <Link to={`/eshop/${categoryName}/${item.name}`}><ItemCard key={item.id} imageUrl={item.imageUrl} /></Link>
                        <p key={item.name}>{item.name}</p>
                    </div>      
                ))}
            </div>
        </div>
        
    )
}

export default CategoryItem