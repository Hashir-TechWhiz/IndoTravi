import React from 'react'
import Search from '../ui/Search';
import AchievementCard from '../cards/AchievementCard';

const HeroSection = () => {
    return (
        <section className='p-3'>
            <div className="flex flex-col gap-2 items-center justify-center min-h-[55rem] bg-cover bg-center bg-no-repeat rounded-xl px-2" style={{ backgroundImage: `url(/images/Bg.webp)` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent -z-10" />
                <h1
                    className='text-[min(10vw,90px)] font-semibold md:max-w-7xl mx-auto text-center text-white leading-tight'>
                    Extraordinary natural and cultural charm
                </h1>
                <p className='text-[min(5vw,20px)] font-medium md:max-w-7xl mx-auto text-center text-white leading-tight'>
                    Exploring Indonesia is an unforgettable experience
                </p>
                <Search />
            </div>
            <AchievementCard />
        </section>
    )
}

export default HeroSection;
