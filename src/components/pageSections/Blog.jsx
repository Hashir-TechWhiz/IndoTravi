import React from 'react';

import Button from '../common/Button';
import BlogCard from '../cards/BlogCard';
import { blogs } from '../../utils/Constants';

const Blog = () => {

    return (
        <div className="Section">

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

            <div className='flex justify-center mt-10'>
                <Button id="view" label="View More" className='text-white' bgColor='black' />
            </div>
        </div>
    );
};

export default Blog;