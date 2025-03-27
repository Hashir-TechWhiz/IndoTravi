import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { testimonials } from '../../utils/Constants';
import TestimonialCard from './TestimonialCard';

const TestimonialSlider = () => {
    return (
        <div className="flex items-center justify-center max-w-7xl w-full mx-auto z-20">
            <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 4500,
                }}
                spaceBetween={10}
                className="my-swiper"

                loop={true}
                slidesPerView={1}
                navigation={true}
            >
                {testimonials.map((card, index) => (
                    <SwiperSlide
                        key={index}
                        className='md:mb-10 mb-0 py-20 w-full'>
                        <div className="flex justify-center items-center w-full">
                            <TestimonialCard key={card.title} feedback={card.feedback} name={card.name} title={card.title} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;