// Components/TestBanner/TestBanner.jsx
import { FaStar, FaCopy } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

// Testimonial data array
const TestimonialsData = [
    {
        id: 1,
        name: "John Doe",
        text: 'I had an amazing experience with the program! The lessons were clear, engaging, and practical, allowing me to apply what I learned immediately.',
        img: "https://picsum.photos/101/101",
        delay: 0.2,
    },
    {
        id: 2,
        name: "Steve Smith",
        text: 'This course exceeded my expectations! The instructors were knowledgeable, and I gained valuable skills that will help me in my career.',
        img: "https://picsum.photos/102/102",
        delay: 0.5,
    },
    {
        id: 3,
        name: "Sara Wilson",
        text: 'An excellent program that covered everything I needed. I feel confident in my ability to apply the skills I\'ve learned in real-world scenarios.',
        img: 'https://picsum.photos/104/104',
        delay: 0.8,
    },
    {
        id: 4,
        name: 'Arif Khan',
        text: 'The content was comprehensive and well-structured. I was able to grasp even the more complex topics thanks to the thorough explanations provided.',
        img: 'https://picsum.photos/103/103',
        delay: 1.1,
    },
];

// Slider settings
const settings = {
    pauseOnFocus: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

// TestBanner component
const TestBanner = () => {
    const [copySuccess, setCopySuccess] = useState({});

    const handleCopyUrl = (id, url) => {
        navigator.clipboard.writeText(url)
            .then(() => {
                setCopySuccess(prevState => ({ ...prevState, [id]: true }));
                setTimeout(() => {
                    setCopySuccess(prevState => ({ ...prevState, [id]: false }));
                }, 2000);
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <div className="py-14 mb-10 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="space-y-4 text-center max-w-[600px] mx-auto mb-10">
                    <h1 className="uppercase font-semibold text-yellow-400 tracking-wide">
                        Our Testimonials
                    </h1>
                    <p className="font-semibold text-3xl">
                        What Our Students Say About Us
                    </p>
                </div>

                {/* Testimonial Cards Section */}
                <Slider {...settings}>
                    {TestimonialsData.map((item) => (
                        <div key={item.id} className="transition-transform transform hover:scale-105">
                            <div className="flex flex-col gap-4 p-8 mx-3 shadow-lg rounded-xl  bg-opacity-80 bg-gray-800 relative">
                                {/* Upper Section */}
                                <div className="flex justify-start items-center gap-5 relative">
                                    <img
                                        src={item.img}
                                        alt={`${item.name}'s picture`}
                                        className="w-16 h-16 rounded-full shadow-lg border-4 border-yellow-400 "
                                    />
                                    <div>
                                        <p className="text-xl font-bold text-white">
                                            {item.name}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleCopyUrl(item.id, item.img)}
                                        className="absolute top-0 right-0 text-gray-400 hover:text-gray-600"
                                        title="Copy Image URL"
                                    >
                                        <FaCopy />
                                    </button>
                                </div>

                                {/* Body Section */}
                                <div className="py-9 space-y-6">
                                    <p className="text-sm text-gray-300 italic">
                                        {item.text}
                                    </p>

                                    {/* Star Rating */}
                                    <div className="flex text-yellow-400 space-x-1">
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar key={index} />
                                        ))}
                                    </div>
                                </div>

                                {/* Copy Success Message */}
                                {copySuccess[item.id] && (
                                    <p className="text-green-400 mt-2 text-center text-sm">
                                        Image URL Copied!
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestBanner;
