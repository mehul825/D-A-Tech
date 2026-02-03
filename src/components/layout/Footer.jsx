import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Code, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <Code className="h-8 w-8 text-blue-500" />
                            <span className="text-xl font-bold text-white tracking-wider">
                                D&A <span className="text-blue-500">Tech</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 mb-4">
                            Providing top-notch IT Technical Support and Custom Billing Software Solutions for businesses of all sizes.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
                            <li><Link to="/billing-software" className="hover:text-blue-400 transition-colors">Billing Software</Link></li>
                            <li><Link to="/custom-software" className="hover:text-blue-400 transition-colors">Custom Solutions</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                                <span>Purana Bhojpur, Buxar – 802133</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <a href="tel:+91XXXXXXXXXX" className="hover:text-blue-400">+91 XXXXX XXXXX</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <a href="mailto:meetdeepakkumar108@gmail.com" className="hover:text-blue-400 break-all">meetdeepakkumar108@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Social (Simplified) */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Facebook className="w-6 h-6" /></a>
                            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Twitter className="w-6 h-6" /></a>
                            <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram className="w-6 h-6" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} D&A Tech Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
