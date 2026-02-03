import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, CheckCircle, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-slate-950">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6"
                        >
                            Complete Tech Support & Custom Software Solutions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed"
                        >
                            We provide Laptop & Computer Technical Support, Software Troubleshooting, and Custom Billing / POS Software solutions tailored to the size and needs of your business.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <a href="tel:+91XXXXXXXXXX" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                                Call Now
                            </a>
                            <a href="https://wa.me/91XXXXXXXXXX" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                                WhatsApp Us
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-16 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<Monitor className="w-8 h-8 text-blue-500" />}
                            title="IT Support"
                            description="Laptop slow, Virus removal, Hardware upgrade, Windows installation."
                            link="/services"
                        />
                        <ServiceCard
                            icon={<Code className="w-8 h-8 text-cyan-500" />}
                            title="Custom Software"
                            description="Tailored software solutions for your unique business needs."
                            link="/custom-software"
                        />
                        <ServiceCard
                            icon={<CheckCircle className="w-8 h-8 text-emerald-500" />}
                            title="Billing Software"
                            description="GST Billing, POS, Inventory Management for all shop types."
                            link="/billing-software"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ServiceCard = ({ icon, title, description, link }) => (
    <Link to={link} className="block group">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 h-full">
            <div className="mb-4 p-3 bg-slate-950 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
            <p className="text-slate-400 mb-4">{description}</p>
            <div className="flex items-center text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </div>
        </div>
    </Link>
);

export default Home;
