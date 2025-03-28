import React from 'react';

import { steps } from '../../utils/Constants';

const HowItWorks = () => {
    return (
        <section className="Section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12">

                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src="/images/Bg.webp"
                        alt="Travel destination"
                        className="w-full h-full object-cover"
                        loading='lazy'
                    />

                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <p className="text-lg text-white">Embark on a journey to find your dream destination, where adventure and relaxation await, creating unforgettable memories along the way</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="text-gray-500 font-medium">How it works</div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10">One click for you</h2>

                    <div className="space-y-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="p-2 bg-gray-100 rounded-full">
                                    <step.icon className="w-5 h-5 text-gray-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
                                    <p className="text-gray-500 text-justify">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;