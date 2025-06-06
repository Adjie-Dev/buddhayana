import React from 'react';
import { Home, Sun, Moon, Heart, Menu, X } from 'lucide-react';
import { FaDharmachakra } from "react-icons/fa";

const Navbar = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const navItems = [
        { id: 'home', label: 'Beranda', icon: Home },
        { id: 'morning', label: 'Puja Pagi', icon: Sun },
        { id: 'evening', label: 'Puja Sore', icon: Moon },
        { id: 'meditation', label: 'Meditasi', icon: Heart }
    ];

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <FaDharmachakra className="h-8 w-8 text-orange-600 mr-2" />
                            <span className="text-xl font-bold text-gray-800">Buddhayana Digital</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSection(item.id)}
                                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id
                                        ? 'text-orange-600 bg-orange-50'
                                        : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <IconComponent className="h-4 w-4 mr-2" />
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-orange-600 p-2"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setActiveSection(item.id);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium ${activeSection === item.id
                                            ? 'text-orange-600 bg-orange-50'
                                            : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <IconComponent className="h-5 w-5 mr-3" />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;