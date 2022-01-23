import React from "react";
import {ChevronRightIcon} from '@heroicons/react/outline'

import './contact-us.scss'

const Contact = () => {
    return(
        <>
            <div className="contact">
                <div className="contact-img"></div>
                <div className="contact-form">
                    <form action="">
                        <div className="text-input">
                            <label>FIRST NAME</label>
                            <input type="text" placeholder="Enter your first name" />
                        </div>
                        <div className="text-input">
                            <label>LAST NAME</label>
                            <input type="text" placeholder="Enter your last name" />
                        </div>
                        <div className="text-input">
                            <label>EMAIL</label>
                            <input type="text" placeholder="Enter your email id" />
                        </div>
                        <div className="text-input">
                            <label>PHONE NO</label>
                            <input type="text" placeholder="Enter your phone no." />
                        </div>
                        <div className="text-input">
                            <label>MESSAGE</label>
                            <input type="text" placeholder="Enter your message" />
                        </div>
                    </form>
                    <button>Submit    &#8594;</button>
                </div>
                
            </div>
        </>
    )
}

export default Contact