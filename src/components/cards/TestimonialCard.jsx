import React from "react";

const TestimonialCard = ({ name, title, feedback, avatarSrc = "/images/Bg.webp" }) => {
    return (
        <div className="relative w-full bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-400/20 md:max-h-60 h-auto">

            <div className="flex md:flex-row flex-col items-center w-full gap-10">

                <div className="flex md:flex-row flex-col items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                            src={avatarSrc}
                            alt={`${name} avatar`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-xl font-medium text-gray-800">{name}</h4>
                        <p className="text-gray-500">{title}</p>
                    </div>
                </div>

                {/* Testimonial text */}
                <div className="flex-1 text-center md:text-left max-w-3xl ml-auto w-full">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg line-clamp-5">
                        {feedback}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;