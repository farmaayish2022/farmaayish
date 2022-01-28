import React, { useEffect, useLayoutEffect, useRef} from "react";
import hoverEffect from 'hover-effect'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap,Power3,Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";

import './collection-showcase.scss'

import {ReactComponent as CircleSvg} from './Circle.svg';

gsap.registerPlugin(ScrollTrigger)

const CollectionShowcase = () => {
    
    const d = new Date();
    let year = d.getFullYear();
    
    let title = useRef(null)
    
    const ref = useRef(null)
    useEffect(()=>{
        var scroll = null
        if(ref){
            scroll = new LocomotiveScroll({
                el:ref.current,
                smooth: true,
                direction: 'horizontal'
            })
        }
        return () => {if (scroll) scroll.destroy()}
    },[])

    useEffect(()=>{
        
        const scrollContainer = document.querySelector('.collection-showcase')
        scrollContainer.addEventListener('wheel',(evt) => {
            evt.preventDefault()
            scrollContainer.scrollLeft += evt.deltaY
        })
        return () => window.removeEventListener('wheel', (evt) => {
            evt.preventDefault()
            scrollContainer.scrollLeft += evt.deltaY
        })

    },[])

    useLayoutEffect(()=>{
        if(ref){
            let tl = new gsap.timeline({
                scrollTrigger: '.heading',
                scrub: 1
            })
            tl
            .from(title,2,{y: 300, opacity: 0, ease: Power3.easeOut },0.5)
            .from('.collection-brief', 2 ,{y:500, skewY: 20, ease: Power4.easeOut},0.3)
            .from('.category-name',4,{x: -300, opacity:0, ease: Power3.easeOut},0.4)
        }  
    },[])

    useEffect(()=>{
        var image_animate = new hoverEffect({
            parent: document.querySelector('#frame-1'),
            intensity: 0.3,
            imagesRatio: 1.5,
            image1: 'https://i.ibb.co/QcZGJy3/Timeless.webp',
            image2: 'https://i.ibb.co/2csS1X0/Symphony.webp',
            displacementImage: 'https://i.ibb.co/dK0dfSn/overlay.png'
        })
        var image_animate2 = new hoverEffect({
            parent: document.querySelector('#frame2'),
            intensity: 0.3,
            imagesRatio: 1.5,
            image1: 'https://i.ibb.co/cxLjNz8/Harmony.webp',
            image2: 'https://i.ibb.co/P1cN3q0/earring1.webp',
            displacementImage: 'https://i.ibb.co/dK0dfSn/overlay.png'
        })
        var image_animate3 = new hoverEffect({
            parent: document.querySelector('#frame3'),
            intensity: 0.3,
            imagesRatio: 1.5,
            image1: 'https://i.ibb.co/3ChRYR2/Mystique.webp',
            image2: 'https://i.ibb.co/1MkX3k7/earring2.webp',
            displacementImage: 'https://i.ibb.co/dK0dfSn/overlay.png'
        })
        var image_animate4 = new hoverEffect({
            parent: document.querySelector('#frame4'),
            intensity: 0.3,
            imagesRatio: 1.5,
            image1: 'https://i.ibb.co/t2dVwM0/Cosmos.webp',
            image2: 'https://i.ibb.co/YPdC3PS/bracelet.webp',
            displacementImage: 'https://i.ibb.co/dK0dfSn/overlay.png'
        })
        var image_animate5 = new hoverEffect({
            parent: document.querySelector('#frame5'),
            intensity: 0.3,
            imagesRatio: 1.5,
            image1: 'https://i.ibb.co/KsmSpML/necklace.webp',
            image2: 'https://i.ibb.co/SdZk3pQ/necklace3.webp',
            displacementImage: 'https://i.ibb.co/dK0dfSn/overlay.png'
        })
    },[])

    return(
        <div className="static-elements">

            <div className="bottom-links">
                    <p>Collections &#8212;</p>
                    <p>Kwaiyosh o ke pankh</p>
                    <p>Jewellery Fiesta</p>
            </div>
            <div className="company-name">
                    <h4>Farmaayish</h4>
                    <p>{year}</p>
            </div>
            <CircleSvg className="circle-svg"/>

            <div className="collection-showcase" data-scroll-container ref={ref}>
            
                <section data-scroll-section className="collection-category">
                    <div className="image-frame" id="frame-1">
                        {/* <img src="https://i.ibb.co/QcZGJy3/Timeless.webp" alt="mystique-image" /> */}
                    </div>
                    <div className="heading">
                        <h1 ref={el => title = el}>SYMPHONY</h1>
                        <p>&#8212;exceptional</p>
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
                </section>

                <section data-scroll-section className="collection-category">
                    <div className="image-frame" id="frame2">
                        {/* <img className="img1" src="https://i.ibb.co/cxLjNz8/Harmony.webp" alt="harmony" />
                        <img className="img2" src="https://i.ibb.co/P1cN3q0/earring1.webp" alt="harmony" /> */}
                    </div>
                    <div className="heading" data-scroll data-scroll-speed="1">
                        <h1>HARMONY</h1>
                        <p>&#8212;sensational</p>
                    </div>
                    <div className="category-name">
                        <h4>Earrings</h4>
                        <p>Contoured black<br/>collections</p>
                    </div>
                    <div className="collection-brief" data-scroll data-scroll-speed="2">
                        <p>Lorem ipsum dolor sit amet,<br/>
                        consectetur adipiscing elit.<br/>
                        Suspendisse id leo at velit suscipit<br/>
                        viverra at ac nisi. Sed ac<br/>
                        sem sapien. Curabitur ullamcorper<br/> 
                        facilisis nunc.</p>
                    </div>
                    
                </section>

                <section data-scroll-section className="collection-category">
                    <div className="image-frame" id="frame3">
                        {/* <img src="https://i.ibb.co/QcZGJy3/Timeless.webp" alt="harmony" /> */}
                    </div>
                    <div className="heading" data-scroll data-scroll-speed="1">
                        <h1>MYSTIQUE</h1>
                        <p>&#8212;astounding</p>
                    </div>
                    <div className="category-name">
                        <h4>Bracelet</h4>
                        <p>Contoured black<br/>collections</p>
                    </div>
                    <div className="collection-brief" data-scroll data-scroll-speed="2">
                        <p>Lorem ipsum dolor sit amet,<br/>
                        consectetur adipiscing elit.<br/>
                        Suspendisse id leo at velit suscipit<br/>
                        viverra at ac nisi. Sed ac<br/>
                        sem sapien. Curabitur ullamcorper<br/> 
                        facilisis nunc.</p>
                    </div>
                    
                </section>

                <section data-scroll-section className="collection-category">
                    <div className="image-frame" id="frame4">
                        {/* <img src="https://i.ibb.co/QcZGJy3/Timeless.webp" alt="harmony" /> */}
                    </div>
                    <div className="heading" data-scroll data-scroll-speed="1">
                        <h1>COSMOS</h1>
                        <p>&#8212;newfangled</p>
                    </div>
                    <div className="category-name">
                        <h4>Bangles</h4>
                        <p>Contoured black<br/>collections</p>
                    </div>
                    <div className="collection-brief" data-scroll data-scroll-speed="2">
                        <p>Lorem ipsum dolor sit amet,<br/>
                        consectetur adipiscing elit.<br/>
                        Suspendisse id leo at velit suscipit<br/>
                        viverra at ac nisi. Sed ac<br/>
                        sem sapien. Curabitur ullamcorper<br/> 
                        facilisis nunc.</p>
                    </div>
                    
                </section>

                <section data-scroll-section className="collection-category">
                    <div className="image-frame" id="frame5">
                        {/* <img src="https://i.ibb.co/QcZGJy3/Timeless.webp" alt="harmony" /> */}
                    </div>
                    <div className="heading" data-scroll data-scroll-speed="1">
                        <h1>TIMELESS</h1>
                        <p>&#8212;haute couture</p>
                    </div>
                    <div className="category-name">
                        <h4>Necklace</h4>
                        <p>Contoured black<br/>collections</p>
                    </div>
                    <div className="collection-brief" data-scroll data-scroll-speed="2">
                        <p>Lorem ipsum dolor sit amet,<br/>
                        consectetur adipiscing elit.<br/>
                        Suspendisse id leo at velit suscipit<br/>
                        viverra at ac nisi. Sed ac<br/>
                        sem sapien. Curabitur ullamcorper<br/> 
                        facilisis nunc.</p>
                    </div>
                    
                </section>

            </div>
        </div>
        
    )
}

export default CollectionShowcase