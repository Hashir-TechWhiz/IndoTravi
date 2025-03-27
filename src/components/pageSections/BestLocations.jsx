import React from 'react';
import ImageGridCard from '../cards/ImageGridCard';
import Heading from '../common/Heading';

const BestLocations = () => {
    return (

        <section className='flex flex-col gap-5 max-w-7xl mx-auto py-24 px-2'>

            <Heading title="Indonesian Tourism"
                subTitle="Best Locations"
                description="Extraordinary natural beauty, enjoy the rich culture, and experience the friendliness of the local people"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl mt-5 md:mt-10">
                {/* First large image (spans 2 columns) */}
                <div className="relative md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
                    <ImageGridCard
                        src="/images/Bg.webp"
                        alt="Bromo Tengger Tour"
                        location="Bromo, East Java"
                        title="Bromo Tengger Tour"
                    />
                </div>
                {/* Second smaller image */}
                <ImageGridCard
                    src="/images/Bg.webp"
                    alt="Bali Beach Tourism"
                    location="Denpasar, Bali"
                    title="Bali Beach Tourism"
                />
                {/* Third smaller image */}
                <ImageGridCard
                    src="/images/Bg.webp"
                    alt="Sumatra Tourism"
                    location="Lampung, South Sumatra"
                    title="Sumatra Tourism"
                />
                {/* Fourth large image (spans 2 columns) */}
                <div className="relative md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
                    <ImageGridCard
                        src="/images/Bg.webp"
                        alt="Borobudur Temple Tour"
                        location="Jogjakarta, Central Java"
                        title="Borobudur Temple Tour"
                    />
                </div>
            </div>
        </section>
    );
};

export default BestLocations;
