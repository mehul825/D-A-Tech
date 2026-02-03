import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-slate-950 min-h-screen pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-bold text-white mb-6">Get in Touch</h1>
                        <p className="text-slate-400 text-lg mb-10">
                            Have a question or need technical support? Fill out the form or reach us directly.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-blue-500 mt-1 mr-4" />
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Phone</h3>
                                    <p className="text-slate-400">+91 XXXXX XXXXX</p>
                                    <p className="text-slate-400">+91 XXXXX XXXXX</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-blue-500 mt-1 mr-4" />
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Email</h3>
                                    <p className="text-slate-400">support@dnatech.com</p>
                                    <p className="text-slate-400">info@dnatech.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-blue-500 mt-1 mr-4" />
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Address</h3>
                                    <p className="text-slate-400">
                                        Shop No. 12, Tech Complex,<br />
                                        Main Market, City Name,<br />
                                        State, PIN - 1100XX
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="w-6 h-6 text-blue-500 mt-1 mr-4" />
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Opening Hours</h3>
                                    <p className="text-slate-400">Mon - Sat: 10:00 AM - 8:00 PM</p>
                                    <p className="text-slate-500">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-slate-400 text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 text-sm font-medium mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" /> Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
