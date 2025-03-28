import React from 'react'

const Heading = ({
    title,
    subTitle,
    description
}) => {
    return (
        <div className='flex flex-col items-start'>
            <p className='text-lg text-gray-400'>{subTitle}</p>

            <div className='flex md:flex-row flex-col md:gap-5 gap-0 justify-between w-full items-start'>
                <h2 className='text-4xl md:text-5xl font-semibold'>{title}</h2>
                <p className='md:text-lg text-sm max-w-md text-gray-400'>{description}</p>
            </div>
        </div>
    )
}

export default Heading;
