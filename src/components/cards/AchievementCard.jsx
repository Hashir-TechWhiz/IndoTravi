import React from 'react';

import { homeCards } from '../../utils/Constants';

const AchievementCard = () => {
    return (
        <div className="mt-[-65px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {homeCards.map((card, index) => (
                <div key={index} className="flex items-center justify-center w-full sm:h-32 h-28 bg-white shadow-xl rounded-2xl">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-black">{card.count}</h2>
                        <p className="text-lg text-gray-400">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AchievementCard;