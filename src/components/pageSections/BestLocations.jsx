import React from 'react';

import Heading from '../common/Heading';
import ImageGridCard from '../cards/ImageGridCard';

const BestLocations = () => {
    return (

        <section className='Section flex flex-col gap-5 max-w-7xl mx-auto pt-20 px-2'>

            <Heading title="Indonesian Tourism"
                subTitle="Best Locations"
                description="Extraordinary natural beauty, enjoy the rich culture, and experience the friendliness of the local people"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl mt-5 md:mt-10">
                <div className="relative md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
                    <ImageGridCard
                        src="/images/Tengger.webp"
                        alt="Bromo Tengger Tour"
                        location="Bromo, East Java"
                        title="Bromo Tengger Tour"
                    />
                </div>

                <ImageGridCard
                    src="/images/BaliBeach.webp"
                    alt="Bali Beach Tourism"
                    location="Denpasar, Bali"
                    title="Bali Beach Tourism"
                />

                <ImageGridCard
                    src="/images/Bg.webp"
                    alt="Sumatra Tourism"
                    location="Lampung, South Sumatra"
                    title="Sumatra Tourism"
                />

                <div className="relative md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
                    <ImageGridCard
                        src="/images/Temple.webp"
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
