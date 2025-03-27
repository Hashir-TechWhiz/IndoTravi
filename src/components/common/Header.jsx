import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../utils/Constants';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={`fixed top-0 w-full p-5 text-white z-50 md:mt-5`}>
            <div className="flex items-center justify-between max-w-[95rem] mx-auto">
                {/* Logo */}
                <Link to="/" className="text-2xl font-extrabold">
                    IndoTravi
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Button (Visible on desktop) */}
                <button className="hidden md:block px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
                    Book Now
                </button>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6 text-white" />
                    ) : (
                        <Bars3Icon className="w-6 h-6 text-white" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 mt-5 bg-black/80 p-5 rounded-lg">
                    {navItems.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            className="text-white hover:text-gray-300 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    {/* Mobile Button */}
                    <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
                        Book Now
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
