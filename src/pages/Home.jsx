import React from 'react'

import Blog from '../components/pageSections/Blog';
import HowItWorks from '../components/pageSections/HowItWork';
import HeroSection from '../components/pageSections/HeroSection';
import TourPackages from '../components/pageSections/TourPackages';
import Testimonials from '../components/pageSections/Testimonials';
import BestLocations from '../components/pageSections/BestLocations';

const Home = () => {
    return (
        <>
            <HeroSection />
            <BestLocations />
            <HowItWorks />
            <TourPackages />
            <Testimonials />
            <Blog />
        </>
    )
}

export default Home;
