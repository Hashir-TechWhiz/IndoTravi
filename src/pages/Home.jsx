import React from 'react'
import HowItWorks from '../components/pageSections/HowItWork';
import HeroSection from '../components/pageSections/HeroSection';
import TourPackages from '../components/pageSections/TourPackages';
import Testimonials from '../components/pageSections/Testimonials';
import BestLocations from '../components/pageSections/BestLocations';
import BlogCards from '../components/pageSections/Blog';

const Home = () => {
    return (
        <>
            <HeroSection />
            <BestLocations />
            <HowItWorks />
            <TourPackages />
            <Testimonials />
            <BlogCards />
        </>

    )
}

export default Home;
