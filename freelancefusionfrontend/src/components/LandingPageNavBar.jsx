import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LandingPageNavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { label: 'Home', href: '#' },
        { label: 'Careers', href: '#' },

        { label: 'Policy', href: '#' },
        { label: 'Terms & Condition', href: '#' },
    ];

    return (
        <header className="bg-gradient-to-b from-white to-gray-300 fixed inset-x-0 top-0 z-50 shadow-sm backdrop-blur-lg border-b border-gray-100/80">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo with Image */}
                <a href="#" className="flex items-center space-x-2 group">
                    <span className="sr-only">Home</span>
                    <img
                        src="https://via.placeholder.com/32x32" // Replace with your image URL
                        alt="Company Logo"
                        className="h-8 w-8 rounded-lg object-cover"
                    />
                    <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        YourBrand
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center space-x-6">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="relative px-3 py-2 text-gray-900 hover:text-gray-900 transition-all duration-300 group"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Auth Buttons - Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        to='/login/'
                        className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100/50 rounded-lg transition-all duration-300 border border-gray-200/80 hover:border-gray-300"
                    >
                        Log in
                    </Link>
                    <Link to='/register/'
                        
                        className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                        Register
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-lg border border-gray-200/80 hover:bg-gray-100/50 transition-all duration-300"
                    aria-label="Toggle navigation menu"
                >
                    <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute inset-x-0 top-16 bg-white/95 backdrop-blur-sm border-b border-gray-100/80 shadow-xl">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block px-4 py-3 text-gray-600 hover:bg-gray-50/50 rounded-lg transition-all duration-300"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="pt-4 space-y-2 border-t border-gray-100">
                            <a
                                href="#"
                                className="block px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50/50 rounded-lg border border-gray-200/80"
                            >
                                Log in
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-teal-600 rounded-lg shadow-md text-center"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default LandingPageNavBar;