import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Scrollbar} from 'swiper';

import "swiper/scss";
import "swiper/scss/scrollbar"

import './new-arrivals.scss'

import SHOP_DATA from "../../data";
import ItemCard from "../item-card/item-card";


SwiperCore.use([Scrollbar]);

const NewArrivals = () => {
    const [categoryName, setCategoryName] = useState('Rings')
    const [detail, setDetail] = useState([])

    useEffect(() => {

        const getCategory = (category) => {
            return category.title == categoryName
        }

        const details = SHOP_DATA.filter(getCategory)[0]
        setDetail(details.items)

    },[categoryName])
    
    return(
        <div className="new-arrivals">

            <div className="headings">
                <p>EXPLORE</p>
                <h1>NEW ARRIVALS</h1>
            </div>
            
            <div className="items">
                <div className="categories">
                    <p onClick={() => setCategoryName('Rings')}>RINGS</p>
                    <p onClick={() => setCategoryName('Necklaces')}>NECKLACE</p>
                    <p onClick={() => setCategoryName('Bangles')}>BANGLES</p>
                    <p onClick={() => setCategoryName('Earrings')}>EARRINGS</p>
                    <p onClick={() => setCategoryName('Bracelets')}>BRACELETS</p>
                </div>
                <div className="item-info">
                    <Swiper scrollbar={{"hide": true}} slidesPerView={4} className="mySwiper" breakpoints={{"200": {"slidesPerView": 1,"spaceBetween": 50},"420": {"slidesPerView": 1,"spaceBetween": 50},"640": {"slidesPerView": 2,"spaceBetween": 50},"768": {"slidesPerView": 3,"spaceBetween": 55},"1024": {"slidesPerView": 4,"spaceBetween": 30}}}>
                        {detail.map(item => (
                           
                            <SwiperSlide key={item.id} >
                                <Link to={`/eshop/${categoryName}/${item.name}`}>
                                    <ItemCard key={item.id} imageUrl={item.imageUrl} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
    
}

export default NewArrivals