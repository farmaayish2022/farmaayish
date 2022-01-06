import React from "react"

import HeroSection from "../../components/hero-section/hero-section"
import NewArrivals from "../../components/new-arrivals/new-arrivals"
import Collection1 from "../../components/collection1/collection1"
import Collection2 from "../../components/collection2/collection2"
import Collection3 from "../../components/collection3/collection3"
import FeaturesSection from "../../components/features/features"

const HomePage = () => {
    return(
        <>
            <HeroSection/>
            <NewArrivals/>
            <Collection1/>
            <Collection2/>
            <Collection3/>
            <FeaturesSection/>
        </>
        
    )
}

export default HomePage
