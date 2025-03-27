import React from 'react';

const Button = ({ children, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={` text-black hover:bg-gray-200 rounded-full px-6 py-3 transition-colors duration-300 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;