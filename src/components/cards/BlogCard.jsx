import React from "react";

const BlogCard = ({
    date,
    title,
    description,
    image
}) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">

            <div className="w-full h-[250px] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            <div className="flex flex-col gap-5 p-6">
                <p className="text-gray-400 text-sm">{date}</p>

                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight">
                    {title}
                </h3>

                <p className="text-gray-500 text-lg line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BlogCard;