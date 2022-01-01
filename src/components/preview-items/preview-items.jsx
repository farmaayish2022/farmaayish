import React from "react";
import { Link } from "react-router-dom";
import './preview-items.scss'
import "swiper/scss";
import "swiper/scss/pagination"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Pagination} from 'swiper';

import ItemCard from "../item-card/item-card";

SwiperCore.use([Pagination]);

const ItemsPreview = ({title,items}) => {
    return(
        <div className="item-preview">
            <h2>{title}</h2>
            <div className="preview">
                <Swiper slidesPerView={4} spaceBetween={30} pagination={{"clickable": true, type: 'bullets'}} breakpoints={{"200": {"slidesPerView": 1,"spaceBetween": 50},"420": {"slidesPerView": 1,"spaceBetween": 50},"640": {"slidesPerView": 2,"spaceBetween": 50},"768": {"slidesPerView": 3,"spaceBetween": 55},"1024": {"slidesPerView": 4,"spaceBetween": 30}}} className="mySwiper">
                    {items.map(item => (
                        <SwiperSlide key={item.id}>
                            <p>{item.name}</p>
                            <Link to={`/eshop/${title}/${item.name}`}>
                                <ItemCard key={item.id} imageUrl={item.imageUrl}/>
                            </Link>
                            <p className="price">{item.price}</p>
                        </SwiperSlide> 
                    ))}
                </Swiper>
            </div>
        </div>
        
    )
}

export default ItemsPreview