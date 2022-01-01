import React from "react";
import {TruckIcon, ChatIcon, LockClosedIcon, GiftIcon} from '@heroicons/react/outline'

import './features.scss'

const FeaturesSection = () => {
    return(
        <div className="features">
            <div className="feature-item">
                <TruckIcon color="#4F4F4F" className="feature-icon"/>
                <h4>DELIVERY</h4>
                <p>Free shipping over Rs.1000.</p>
            </div>
            <div className="feature-item">
                <ChatIcon color="#4F4F4F" className="feature-icon"/>
                <h4>CUSTOMER SERVICE</h4>
                <p>Contact us at farmaayish@gmail.com</p>
            </div>
            <div className="feature-item">
                <LockClosedIcon color="#4F4F4F" className="feature-icon"/>
                <h4>SECURE PAYMENT</h4>
                <p>Credit Cards, UPI, Net Banking.</p>
            </div>
            <div className="feature-item">
                <GiftIcon color="#4F4F4F" className="feature-icon"/>
                <h4>THE ART OF GIFT</h4>
                <p>To enhance your packages.</p>
            </div>
        </div>
    )
}

export default FeaturesSection  