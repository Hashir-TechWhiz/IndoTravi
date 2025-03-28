import React from 'react'

import { StarIcon } from '@heroicons/react/24/solid';

const TourCard = ({
    id,
    image,
    destination,
    days,
    rating,
    startDate,
    endDate,
    price
}) => {
    return (
        <div className="flex justify-center items-center">

            <div key={id} className="relative rounded-3xl overflow-hidden shadow-lg w-full md:h-[550px] h-[400px]">

                <div className="relative w-full h-full">
                    <img
                        src={image}
                        alt={destination}
                        loading='lazy'
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />

                    <div className="absolute top-4 left-4 bg-white/[.25] text-white px-3 py-1 rounded-full text-sm">
                        {days}
                    </div>

                    <div className="absolute top-4 right-4 bg-white/[.25] text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        {rating}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white bg-white/20 m-4 rounded-2xl backdrop-blur-sm z-10">
                        <p className="text-sm opacity-90 tracking-wider">
                            {startDate} - {endDate}
                        </p>
                        <div className="flex justify-between items-end mt-1">
                            <h3 className="text-xl md:text-3xl">{destination}</h3>
                            <p className="text-xl md:text-3xl font-semibold">{price}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TourCard;
