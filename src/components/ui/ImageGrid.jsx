import React from 'react';

const ImageBlock = ({ src, alt, location, title }) => (
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

const ImageGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-100 rounded-2xl shadow-xl max-w-7xl mx-auto">

            {/* First large image (spans 2 columns) */}
            <div className="relative md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
                <ImageBlock
                    src="/images/Bg.webp"
                    alt="Bromo Tengger Tour"
                    location="Bromo, East Java"
                    title="Bromo Tengger Tour"
                />
            </div>

            {/* Second smaller image */}
            <ImageBlock
                src="/images/Bg.webp"
                alt="Bali Beach Tourism"
                location="Denpasar, Bali"
                title="Bali Beach Tourism"
            />

            {/* Third smaller image */}
            <ImageBlock
                src="/images/Bg.webp"
                alt="Sumatra Tourism"
                location="Lampung, South Sumatra"
                title="Sumatra Tourism"
            />

            {/* Fourth large image (spans 2 columns) */}
            <div className="relative md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
                <ImageBlock
                    src="/images/Bg.webp"
                    alt="Borobudur Temple Tour"
                    location="Jogjakarta, Central Java"
                    title="Borobudur Temple Tour"
                />
            </div>

        </div>
    );
};

export default ImageGrid;
