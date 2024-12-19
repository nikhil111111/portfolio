import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Skills', path: '/skills' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-[2000px] mx-4 lg:mx-12"> {/* Adjusted margin */}
                <div className="flex justify-between items-center h-24"> {/* Increased height */}
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-4xl font-bold"> {/* Increased font size */}
                            <span className="text-orange-500">P</span>ortfolio
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-12"> {/* Increased spacing */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                className={`relative text-lg font-medium transition-colors hover:text-orange-500 
                                    ${location.pathname === link.path ? 'text-orange-500' : 'text-gray-700'}
                                `}
                            >
                                {link.title}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 top-full h-0.5 w-full bg-orange-500"
                                        initial={false}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-orange-500 focus:outline-none p-2"
                        >
                            {isOpen ? <HiX size={32} /> : <HiMenu size={32} />} {/* Increased icon size */}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isOpen ? 1 : 0,
                        height: isOpen ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="px-4 pt-2 pb-3 space-y-2"> {/* Adjusted padding */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-md text-lg font-medium transition-colors
                                    ${location.pathname === link.path
                                        ? 'bg-orange-50 text-orange-500'
                                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                                    }
                                `}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
