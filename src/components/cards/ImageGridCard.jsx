import React from 'react'

const ImageGridCard = ({ src, alt, location, title }) => (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <p className="text-sm text-white">{location}</p>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
    </div>
);

export default ImageGridCard;