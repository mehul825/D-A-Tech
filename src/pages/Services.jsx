import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Server, Wifi, Code, ShoppingCart, Wrench, ShieldCheck } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Monitor className="w-8 h-8 text-blue-500" />,
            title: "Laptop & Desktop Repair",
            description: "Expert chip-level repairing for all brands (Dell, HP, Lenovo, Asus, Apple). Screen replacement, keyboard repair, and motherboard fixes."
        },
        {
            icon: <Wrench className="w-8 h-8 text-green-500" />,
            title: "Hardware Upgrade",
            description: "Boost your computer's speed with SSD upgrades and RAM expansion. We ensure data safety during the upgrade process."
        },
        {
            icon: <Wifi className="w-8 h-8 text-purple-500" />,
            title: "Networking Solutions",
            description: "Complete office networking setup, Wi-Fi router configuration, LAN cabling, and server rack management."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
            title: "Virus Removal & OS",
            description: "Genuine Windows installation, antivirus protection, and data recovery services for infected or crashed systems."
        },
        {
            icon: <Code className="w-8 h-8 text-cyan-500" />,
            title: "Custom Software Dev",
            description: "We build tailored software solutions for schools, hospitals, offices, and factories to automate your daily tasks."
        },
        {
            icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
            title: "POS & Billing Software",
            description: "Easy-to-use GST billing software for retail shops, supermarkets, pharmacies, and restaurants with inventory tracking."
        },
        {
            icon: <Server className="w-8 h-8 text-indigo-500" />,
            title: "CCTV & Security",
            description: "Installation and maintenance of CCTV cameras, biometric attendance systems, and smart door locks."
        },
        {
            icon: <Cpu className="w-8 h-8 text-pink-500" />,
            title: "Refurbished Laptops",
            description: "High-quality refurbished business laptops with warranty. Affordable options for students and startups."
        }
    ];

    return (
        <div className="bg-slate-950 min-h-screen pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Our <span className="text-blue-500">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg"
                    >
                        From hardware repairs to advanced software solutions, we provide end-to-end technology services for your home and business.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
                        >
                            <div className="bg-slate-950 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
