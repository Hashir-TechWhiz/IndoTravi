import React from 'react';

import TourCard from '../cards/TourCard';
import Heading from '../common/Heading';
import Button from '../common/Button';
import { tourPackages } from '../../utils/Constants';

const TourPackages = () => {
    return (
        <section className="Section">

            <Heading
                title="Our Tourist Destinations"
                subTitle="Our packages"
                description="Our tourist destinations offer an unrivaled blend of natural beauty and cultural richness"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {tourPackages.map((tour) => (
                    <TourCard
                        key={tour.id}
                        id={tour.id}
                        image={tour.image}
                        destination={tour.destination}
                        days={tour.days}
                        rating={tour.rating}
                        startDate={tour.startDate}
                        endDate={tour.endDate}
                        price={tour.price}
                    />
                ))}
            </div>

            <div className='flex justify-center mt-10'>
                <Button id="view" label="View More" className='text-white' bgColor='black' />
            </div>

        </section>
    );
};

export default TourPackages;