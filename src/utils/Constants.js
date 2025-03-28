import { MagnifyingGlassIcon, TicketIcon, BoltIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

// NavItems.js
export const navItems = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Services',
        path: '/services',
    },
    {
        label: 'Tour',
        path: '/tour',
    },
    {
        label: 'Contact',
        path: '/contact',
    }
];

// Home Cards
export const homeCards = [
    {
        count: '10M+',
        description: 'Total Customers',
    },
    {
        count: '09+',
        description: 'Years of Experiences',
    },
    {
        count: '12K',
        description: 'Total Destinations',
    },
    {
        count: '5.0',
        description: 'Average Ratings',
    },
]

// Destinations for location components
export const destinations = [
    {
        image: "images/Java.jpg",
        head: "Bromo, East Java",
        description: "Bromo Tengger Tour",
    },
    {
        image: "images/Bali.jpg",
        head: "Denpasar, Bali",
        description: "Bali Beach Tourism",
    },
    {
        image: "images/Lumpang.jpg",
        head: "Lampung, South Sumatra",
        description: "Sumatra Tourism",
    },
    {
        image: "images/EastJava.jpg",
        head: "Jogjakarta, Central Java",
        description: "Borobudur Temple Tour",
    },
];

//tour data 
export const tourPackages = [
    {
        id: 1,
        image: '/images/BaliTour.webp',
        days: '7 Days',
        rating: '4.9',
        startDate: '23 AUGUST',
        endDate: '29 AUGUST',
        destination: 'Bali Tour Package',
        price: '$285',
    },
    {
        id: 2,
        image: '/images/JavaTour.webp',
        days: '5 Days',
        rating: '4.8',
        startDate: '23 AUGUST',
        endDate: '27 AUGUST',
        destination: 'Java Tour Package',
        price: '$218',
    },
    {
        id: 3,
        image: '/images/Solo.webp',
        days: '3 Days',
        rating: '4.9',
        startDate: '23 AUGUST',
        endDate: '25 AUGUST',
        destination: 'Solo Tour Package',
        price: '$163',
    },
];

//how its working
export const steps = [
    {
        icon: MagnifyingGlassIcon,
        title: "Find your destination",
        description: "Embark on a journey to discover your dream destination, where adventure and relaxation await.",
    },
    {
        icon: TicketIcon,
        title: "Book a ticket",
        description: "Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform.",
    },
    {
        icon: BoltIcon,
        title: "Make payment",
        description: "We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process.",
    },
    {
        icon: BuildingLibraryIcon,
        title: "Explore destination",
        description: "You'll be immersed in a captivating tapestry of sights, sounds, and tastes as you wind your way through the ancient streets.",
    },
];


//Blogs
export const blogs = [
    {
        id: 1,
        image: "/images/Bg.webp",
        date: "Nov 14, 2022",
        title: "2023 Travel Trends – what you need to know",
        description: "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, and travel remained incredibly important for many."
    },
    {
        id: 2,
        image: "/images/Jeep.webp",
        date: "Nov 18, 2022",
        title: "Jeep Adventure is a new attraction for tourists visiting Garut",
        description: "Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation of driving through steep roads offers a unique experience."
    }
];

// Testimonials
export const testimonials = [
    {
        name: "Donald Sullivan",
        title: "Founder Fiko",
        feedback: "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making.",
        avatar: "/images/donald-sullivan.jpg",
    },
    {
        name: "Jane Doe",
        title: "CEO Wanderlust",
        feedback: "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making.",
        avatar: "/images/donald-sullivan.jpg",
    },
    {

        name: "John",
        title: "Travel Blogger",
        feedback: "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making.",
        avatar: "/images/donald-sullivan.jpg",
    },
    {
        name: "Michel",
        title: "Travel Blogger",
        feedback: "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making.",
        avatar: "/images/donald-sullivan.jpg",
    },
    {
        name: "Smith",
        title: "Travel Blogger",
        feedback: "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making.",
        avatar: "/images/donald-sullivan.jpg",
    },
    {
        name: "Ronal",
        title: "Travel Blogger",
        feedback: "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making.",
        avatar: "/images/donald-sullivan.jpg",
    },
];

// Footer links
export const footerSections = [
    {
        title: "About",
        items: ["About Us", "Blog", "Careers", "Jobs", "In Press", "Gallery"],
    },
    {
        title: "Support",
        items: ["Contact Us", "Online Chat", "WhatsApp", "Telegram", "Ticketing", "Call Center"],
    },
    {
        title: "FAQ",
        items: ["Account", "Booking", "Payments", "Returns", "Privacy Policy", "Terms & Conditions"],
    },
];
