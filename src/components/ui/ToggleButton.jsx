import React, { useState } from "react";

const LanguageToggle = () => {
    const [isSelected, setIsSelected] = useState(true);

    const handleToggle = () => {
        setIsSelected((prev) => !prev);
    };

    return (
        <div
            className="relative flex items-center w-16 h-8 p-1 backdrop-blur-3xl bg-white/20 border border-gray-400/40 rounded-full cursor-pointer"
            onClick={handleToggle}
        >
            {/* Toggle Ball */}
            <div className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 p-1 ${isSelected ? "translate-x-7.5" : "translate-x-0.5"}`} />


            <div className="flex items-center justify-between w-full h-full px-1">
                <span className={`text-sm font-medium z-10 ${isSelected ? "text-gray-400" : "text-black"}`}>
                    DU
                </span>
                <span className={`text-sm font-medium z-10 ${isSelected ? "text-black" : "text-gray-400"}`}>
                    EN
                </span>
            </div>
        </div>
    );
};

export default LanguageToggle;