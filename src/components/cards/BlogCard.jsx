import React from "react";

const BlogCard = ({ date, title, description, image }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Image */}
            <div className="w-full h-[250px] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Date */}
                <p className="text-gray-400 text-sm mb-2">{date}</p>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-base line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BlogCard;