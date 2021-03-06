import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { gsap,Power3 } from "gsap";

import './about-us.scss'

import FeaturesSection from "../features/features";
import Footer from "../footer/footer";

const AboutUs = () => {
    const [offsetY, setOffsetY] = useState(0)
    const ref = useRef(null)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll) 
    },[])

    useLayoutEffect(()=>{
        if(ref){
            let tl = new gsap.timeline()
            tl.from('.about-us-hero-img',1,{y: 1000, opacity: 0,ease: Power3.easeOut })
                .from('.hero-title',1,{x: 200, opacity: 0,ease: Power3.easeOut })
        }
    },[])

    return( 
    <>
    <section className="about-us">
        <section className="about-us-hero-section" style={{transform: `translateY(-${offsetY*0.9}px)`}}>

            <div className="about-us-hero-img" ref={ref}></div> 

            <h1 className="hero-title">ABOUT US</h1>

            <div className="discover">
                <p>DISCOVER</p>
                <div className="discover-icon-bar"></div>
            </div>

        </section>

        <section className="about-us-info">
            <p>Farmaayish Aliquam consectetur tempor nulla vitae placerat.<br/>
                Mauris tincidunt erat et sapien convallis, nec hendrerit ex volutpat.<br/>
                Nunc efficitur magna vel ligula efficitur, in semper purus efficitur.<br/>
                vehicula, augue eu aliquet bibendum, tortor sapien accumsan lorem,<br/>
                vitae cursus orci sapien sit amet ante. Nam fermentum</p>
            <div>
                <h1>FARMAAYISH</h1>
                <p className="subheading">Kwaiyosh o ke pankh</p>
            </div>
            
        </section>

        <section className="about-us-value">
            <h1>THE VALUE WE PROVIDE</h1>
            <div className="value-content">
                <div className="value-img"></div>
                <div className="value-text"><p>
                    FARMAAYISH embraces creativity and fashion.<br/>
                    We use breakthrough materials, adopt <br/>
                    avant-garde techniques and collaborate 
                    with international designers to create collections 
                    that surprise and delight.Pellentesque pellentesque justo massa</p></div>
            </div>
        </section>

        <section className="about-us-packaging">
            <div className="packaging-img">
                <div className="customised"><h1>CUSTOMISED PACKAGING FOR EVERY PRODUCT</h1></div>
                <img src="https://i.ibb.co/jkMtrS0/Coral-Box-Mockup.jpg" alt="coral-box" />
            </div>
            <div className="packaging-img">
                <img src="https://i.ibb.co/phxPd5b/Bag-mockup.jpg" alt="bag-mockup" />
            </div>
            <div className="packaging-img">
                <img src="https://i.ibb.co/t3b6DJp/Lavender-box-mockup.jpg" alt="lavendar-box" />
            </div>
            <p>Curabitur risus est, porta non molestie at, pharetra et ligula.vehicula id dui non posuere. Praesent vel neque<br/>
                Duis orci ex, sodales congue nisl vitae, lobortis finibus dolor.Nullam finibus orci eu velit pulvinar<br/>
                Vestibulum sed mauris sed tellus porttitor feugiat.Aliquam nec dui porta, accumsan quam non</p>
        </section>
    </section>

    <FeaturesSection/>
    <Footer/>
    </>
    
    )
    
}

export default AboutUs