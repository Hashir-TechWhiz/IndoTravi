import React from "react";

import Button from "../common/Button";
import { footerSections } from "../../utils/Constants";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black/100 text-white py-10">
            <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:justify-items-normal justify-items-center">

                {footerSections.map((section, index) => (
                    <div key={index} className="text-center md:text-left">
                        <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                        <ul className="space-y-2 text-gray-400">
                            {section.items.map((item, index) => (
                                <li key={index} className="cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="md:col-span-3 lg:col-span-2 text-center mx-auto w-full">
                    <h3 className="font-semibold text-lg mb-4 lg:text-left text-center">Newsletter</h3>
                    <p className="text-gray-400 mb-4 max-w-lg mx-auto lg:text-left text-center">
                        Don't miss out on the exciting world of travel - subscribe now and
                        embark on a journey of discovery with us.
                    </p>
                    <div className="flex items-center min-sm:max-w-lg bg-gray-800 rounded-full overflow-hidden relative mb-4 p-2 mx-auto">
                        <EnvelopeIcon className="w-5 h-5 ml-2" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-800 text-white px-4 py-2 focus:outline-none"
                        />
                        <div className="absolute right-2">
                            <Button id="subscribe" label="Submit" />
                        </div>
                    </div>

                    <div className="flex lg:justify-end justify-center space-x-4">
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white">
                            <FaYoutube className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-6 text-gray-500 text-center">
                <p>&copy; 2025 IndoTravi, All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;