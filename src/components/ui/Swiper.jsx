import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { testimonials } from '../../utils/Constants';
import { Navigation, Autoplay } from 'swiper/modules';
import TestimonialCard from '../cards/TestimonialCard';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const TestimonialSlider = () => {
    return (
        <div className="relative w-full z-20">
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{
                    delay: 4500,
                }}
                spaceBetween={10}
                className="w-full"
                loop={true}
                slidesPerView={1}
                navigation={{
                    nextEl: ".arrow-right",
                    prevEl: ".arrow-left",
                }}
            >
                {testimonials.map((card, index) => (
                    <SwiperSlide key={index} className="w-full">
                        <div className="flex justify-center items-center w-full">
                            <TestimonialCard key={card.title} feedback={card.feedback} name={card.name} title={card.title} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='hidden md:flex absolute gap-10 bottom-5 left-[5.5%] z-20'>
                <button className="arrow-left text-black text-2xl cursor-pointer">
                    <ArrowLeftIcon className='w-5 h-5' />
                </button>
                <button className="arrow-right text-black text-2xl cursor-pointer">
                    <ArrowRightIcon className='w-5 h-5' />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;