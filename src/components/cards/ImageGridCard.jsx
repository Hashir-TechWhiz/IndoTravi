import React from 'react'

const ImageGridCard = ({
    src,
    alt,
    location,
    title
}) => (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
            src={src}
            alt={alt}
            className="w-full h-[450px] object-cover"
            loading='lazy'
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
            <p className="text-lg text-white">{location}</p>
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
        </div>
    </div>
);

export default ImageGridCard;