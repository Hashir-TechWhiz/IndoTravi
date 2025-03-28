import React from "react";

const Button = ({
    id,
    name,
    label,
    bgColor = "white",
    width = "w-[100px]",
    disabled,
    onClick,
    className = "",
    icon: Icon,
}) => {
    return (
        <button
            type="button"
            id={id}
            name={name}
            disabled={disabled}
            onClick={onClick}
            className={`relative inline-flex items-center justify-center rounded-full border border-gray-400/40 bg-${bgColor} py-2 text-sm text-black font-medium cursor-pointer ${className} ${width}`}>
            <div className="flex gap-1 items-center justify-center w-full">
                {label}
                {Icon && <Icon className="w-5 h-5" />}
            </div>
        </button>
    );
};

export default Button;
