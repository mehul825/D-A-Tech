import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, BarChart3, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const BillingSoftware = () => {
    const features = [
        "GST & Non-GST Billing",
        "Barcode Scanning & Label Printing",
        "Inventory Management",
        "Fast Billing (Keyboard Shortcuts)",
        "Daily/Monthly Sales Reports",
        "Profit & Loss Statements",
        "Customer Ledger (Khata Book)",
        "WhatsApp Bill Sharing"
    ];

    return (
        <div className="bg-slate-950 min-h-screen pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Smart <span className="text-emerald-500">Billing Software</span> for Your Business
                        </h1>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Stop manual calculations and paperwork. Switch to our easy-to-use POS & Billing software designed for retail shops, supermarkets, hardware stores, and restaurants.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center text-slate-300">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <Link to="/contact" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all">
                                Get a Free Demo
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
                    >
                        {/* Abstract Representation of Software Interface */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 border-b border-slate-800 pb-4">
                                <Zap className="text-yellow-500 w-8 h-8" />
                                <div>
                                    <h3 className="text-white font-semibold">Super Fast Billing</h3>
                                    <p className="text-sm text-slate-500">Generate bills in seconds</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 border-b border-slate-800 pb-4">
                                <Database className="text-blue-500 w-8 h-8" />
                                <div>
                                    <h3 className="text-white font-semibold">Stock Management</h3>
                                    <p className="text-sm text-slate-500">Real-time inventory tracking</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <BarChart3 className="text-purple-500 w-8 h-8" />
                                <div>
                                    <h3 className="text-white font-semibold">Business Reports</h3>
                                    <p className="text-sm text-slate-500">Know your daily profits</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BillingSoftware;
