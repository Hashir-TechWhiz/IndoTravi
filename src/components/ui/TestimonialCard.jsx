import React from "react";

const TestimonialCard = ({ name, title, feedback }) => {
    return (
        <div className="flex items-center space-x-6 bg-amber-200 z-20">
            {/* Profile Picture */}


            {/* Testimonial Content */}
            <div>
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="mt-4 text-gray-700">{feedback}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;