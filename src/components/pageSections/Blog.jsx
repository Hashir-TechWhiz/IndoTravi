import React from 'react';
import BlogCard from '../cards/BlogCard';
import { blogs } from '../../utils/Constants';

const BlogCards = () => {

    return (
        <div className="max-w-7xl mx-auto py-20 px-2">

            <div className='flex flex-col items-center justify-center gap-2'>
                <p className='text-lg text-gray-400'>Our Blog</p>
                <h1 className="text-4xl md:text-5xl font-semibold">Our Travel Memories</h1>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {blogs.map(blog => (
                    <BlogCard
                        key={blog.id}
                        image={blog.image}
                        date={blog.date}
                        title={blog.title}
                        description={blog.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogCards;