import React from 'react';
import About from './About';
import Skills from './Skills';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="font-sans bg-white min-h-screen">
            {/* Added pt-24 for navbar spacing and increased overall padding */}
            <section className="pt-32 md:pt-40 pb-20 flex flex-col md:flex-row items-center justify-between w-full max-w-8xl mx-auto px-8 md:px-16">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left space-y-8 md:w-1/2 mb-12 md:mb-0"
                >
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold"> {/* Removed whitespace-nowrap */}
                        Hi, I'm <span className="text-orange-500">Nikhil</span>
                    </h1>

                    <p className="text-2xl md:text-3xl font-semibold text-gray-700">
                        A passionate <span className="text-orange-600 text-3xl font-bold">FULL STACK DEVELOPER</span>
                    </p>
                    <p className="text-xl md:text-2xl text-gray-600">
                        Creating amazing web experiences.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex space-x-8 mt-8">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="transform transition-transform hover:shadow-lg"
                            >
                                <img src={link.icon} alt={link.name} className="w-10 h-10" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Download CV Button */}
                    <motion.a
                        href="nikhilresume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl"
                    >
                        Download CV
                    </motion.a>
                </motion.div>

                {/* Right Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center items-center md:w-1/2"
                >
                    {/* Outer orange circle */}
                    <div className="absolute bg-orange-500 rounded-full 
        w-56 h-56 
        sm:w-72 sm:h-72 
        lg:w-[350px] lg:h-[350px] 
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        transition-all duration-500 ease-out"
                    ></div>

                    {/* White circle container */}
                    <div className="relative z-20 
        w-48 h-48 
        sm:w-64 sm:h-64 
        lg:w-[320px] lg:h-[320px]
        bg-white rounded-full
        flex items-center justify-center"
                    >
                        {/* Profile Image */}
                        <img
                            className="w-44 h-44 
                sm:w-60 sm:h-60 
                lg:w-[300px] lg:h-[300px]
                rounded-full
                object-cover
                object-top              /* Added this to focus on upper part */
                transition-transform duration-500 ease-out 
                group-hover:scale-105"
                            src="/finalimage.png"
                            alt="Profile"
                        />
                    </div>
                </motion.div>

            </section>
        </div>
    );
};

// Social links data
const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nikhil-garg-6539911a3/',
        icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/nikhil111111',
        icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png'
    },
    {
        name: 'Profile',
        url: '#',
        icon: 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
    }
];

export default Home;
