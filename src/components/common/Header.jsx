import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../utils/Constants';
import LanguageToggle from '../ui/ToggleButton';
import Button from '../common/Button';
import { Bars3Icon, UserPlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 w-full p-5 z-50 transition-colors duration-300 ${isScrolled ? "bg-white/15 backdrop-blur-2xl bg-blur-xl" : "md:mt-5"}`}>
            <div className="flex items-center justify-between max-w-[95rem] mx-auto">
                {/* Logo */}
                <Link to="/" className={`text-3xl font-extrabold transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
                    IndoTravi
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center justify-center space-x-12 py-3 px-6 rounded-full backdrop-blur-md bg-white/15 border border-gray-400/40">
                    {navItems.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            className={`transition-colors ${isScrolled ? "text-black" : "text-white hover:text-gray-300 "}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Button (Visible on desktop) */}
                <div className="hidden lg:flex items-center gap-5">
                    <LanguageToggle />
                    <Button id="login" label="Login" icon={UserPlusIcon} />
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <XMarkIcon className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
                    ) : (
                        <Bars3Icon className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden flex flex-col items-center space-y-4 mt-5 bg-black p-5 rounded-lg">
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
                    <LanguageToggle />
                    <Button id="login" label="Login" icon={UserPlusIcon} />
                </div>
            )}
        </header>
    );
};

export default Header;
