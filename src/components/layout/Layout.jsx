import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default Layout;
