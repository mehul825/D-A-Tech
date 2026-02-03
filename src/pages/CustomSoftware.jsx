import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomSoftware = () => {
    const services = [
        {
            icon: <Globe className="w-10 h-10 text-cyan-400" />,
            title: "Web Applications",
            description: "Modern, responsive websites and web apps built with React, Node.js, and other latest technologies."
        },
        {
            icon: <Smartphone className="w-10 h-10 text-pink-400" />,
            title: "Mobile Apps",
            description: "Android and iOS applications to help you reach customers on their smartphones."
        },
        {
            icon: <Database className="w-10 h-10 text-blue-400" />,
            title: "CRM & ERP Systems",
            description: "Manage your business operations, leads, and employees with custom-built management portals."
        },
        {
            icon: <Code className="w-10 h-10 text-green-400" />,
            title: "API Integration",
            description: "Seamlessly connect different software tools and services to streamline your workflow."
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
                        Tailored <span className="text-cyan-400">Software Solutions</span>
                    </motion.h1>
                    <p className="text-slate-400 text-lg">
                        Every business is unique. We build software that fits your specific workflow and requirements.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/30 transition-all hover:bg-slate-900"
                        >
                            <div className="mb-6 bg-slate-950 w-fit p-4 rounded-xl">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <Link to="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 flex items-center">
                                Discuss Your Project &rarr;
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomSoftware;
