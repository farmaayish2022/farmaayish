import React,{useLayoutEffect, useRef} from "react";
import { gsap,Power3 } from "gsap";

import './contact-us.scss'

const Contact = () => {
    const ref = useRef(null)
    
    useLayoutEffect(()=>{
        if(ref){
            let tl = new gsap.timeline()
            tl.from('.contact-img',2,{opacity: 0,scale:5 ,ease: Power3.easeOut },0.5)
            .from('.text-input',1,{x: 200, opacity: 0,ease: Power3.easeOut })
        }  
    },[])
    return(
        <>
            <div className="contact">
                <div className="contact-img" ref={ref}></div>
                <div className="contact-form">
                    <form action="">
                        <div className="text-input">
                            <label>FIRST NAME</label>
                            <input type="text" placeholder="Enter your first name" required />
                        </div>
                        <div className="text-input">
                            <label>LAST NAME</label>
                            <input type="text" placeholder="Enter your last name" required />
                        </div>
                        <div className="text-input">
                            <label>EMAIL</label>
                            <input type="text" placeholder="Enter your email id" required />
                        </div>
                        <div className="text-input">
                            <label>PHONE NO</label>
                            <input type="text" placeholder="Enter your phone no." required />
                        </div>
                        <div className="text-input">
                            <label>MESSAGE</label>
                            <input type="text" placeholder="Enter your message" required />
                        </div>
                    </form>
                    <button>Submit    &#8594;</button>
                </div>
                
            </div>
        </>
    )
}

export default Contact