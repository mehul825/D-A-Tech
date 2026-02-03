import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Monitor, Code, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Billing Software', path: '/billing-software' },
        { name: 'Custom Solutions', path: '/custom-software' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2">
                            <Code className="h-8 w-8 text-blue-500" />
                            <span className="text-xl font-bold text-white tracking-wider">
                                D&A <span className="text-blue-500">Tech</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-slate-300 hover:text-blue-400 hover:bg-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+91XXXXXXXXXX"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                            >
                                <Phone className="w-4 h-4" /> Call Now
                            </a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-slate-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+91XXXXXXXXXX"
                                className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 mt-4 mx-2"
                            >
                                <Phone className="w-4 h-4" /> Call Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
