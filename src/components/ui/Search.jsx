import React, { useState, useRef, useEffect } from "react";

import Button from '../common/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon, UserIcon, WalletIcon } from "@heroicons/react/24/outline";

const Search = () => {
    const [date, setDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [budget, setBudget] = useState("");
    const [budgetOpen, setBudgetOpen] = useState(false);
    const [guests, setGuests] = useState(1);
    const [guestsOpen, setGuestsOpen] = useState(false);

    const datePickerRef = useRef(null);
    const budgetRef = useRef(null);
    const guestRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (budgetRef.current && !budgetRef.current.contains(event.target)) {
                setBudgetOpen(false);
            }
            if (guestRef.current && !guestRef.current.contains(event.target)) {
                setGuestsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-5 items-center backdrop-blur-md bg-white/15 border border-gray-400/40 sm:rounded-full rounded-xl px-6 py-2.5 shadow-lg text-white w-full sm:w-auto mt-5">

            {/* Date Dropdown */}
            <div className="relative w-full sm:w-auto max-sm:border border-gray-300 max-sm:py-2 rounded-lg" ref={datePickerRef}>
                <button
                    className="flex items-center gap-2 w-full justify-center md:justify-start cursor-pointer"
                    onClick={() => setShowDatePicker(!showDatePicker)}>
                    <CalendarDaysIcon className="h-5 w-5" />
                    <span>{date ? date.toLocaleDateString() : "Date"}</span>
                    <span className="ml-5"><ChevronDownIcon className="h-4 w-4" /></span>
                </button>

                {showDatePicker && (
                    <div className="absolute top-full mt-2 z-10">
                        <DatePicker
                            selected={date}
                            onChange={(date) => {
                                setDate(date);
                                setShowDatePicker(false);
                            }}
                            inline
                            className="bg-white rounded-lg shadow-lg"
                        />
                    </div>
                )}
            </div>

            <div className="hidden md:flex border-l border-gray-300 h-6 mx-4"></div>

            {/* Budget Dropdown */}
            <div className="relative w-full sm:w-auto max-sm:border border-gray-300 max-sm:py-2 rounded-lg" ref={budgetRef}>
                <button
                    className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start cursor-pointer"
                    onClick={() => setBudgetOpen(!budgetOpen)}
                >
                    <WalletIcon className="h-5 w-5" />
                    <span>{budget || "Budget"}</span>
                    <span className="ml-5"><ChevronDownIcon className="h-4 w-4" /></span>
                </button>

                {budgetOpen && (
                    <div className="absolute bg-white text-black rounded-lg shadow-lg mt-2 py-2 w-full z-10">
                        {["$", "$$", "$$$"].map((option) => (
                            <button
                                key={option}
                                onClick={() => { setBudget(option); setBudgetOpen(false); }}
                                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="hidden md:flex border-l border-gray-300 h-6 mx-4"></div>

            {/* Guests Dropdown */}
            <div className="relative w-full sm:w-auto max-sm:border border-gray-300 max-sm:py-2 rounded-lg" ref={guestRef}>
                <button
                    className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start cursor-pointer"
                    onClick={() => setGuestsOpen(!guestsOpen)}
                >
                    <UserIcon className="h-5 w-5" />
                    <span>Guest</span>
                    <span className="ml-5"><ChevronDownIcon className="h-4 w-4" /></span>
                </button>

                {guestsOpen && (
                    <div className="absolute bg-white text-black rounded-lg shadow-lg mt-2 p-4 w-full z-10">
                        <div className="flex flex-col">
                            <label htmlFor="guests" className="mb-2">Number:</label>
                            <input
                                type="number"
                                id="guests"
                                min="1"
                                value={guests}
                                onChange={(e) => setGuests(Number(e.target.value))}
                                className="w-full rounded px-2 py-1 border border-gray-300 outline-none"
                            />
                        </div>
                    </div>
                )}
            </div>

            <Button id='search' label='Search' className="md:ml-6" />
        </div>
    );
};

export default Search;