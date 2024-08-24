import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { logo } from '../../assets'; // Import the logo

const Navbar = ({ links }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [mobileDropdownVisible, setMobileDropdownVisible] = useState(false);
    const [submitDropdownVisible, setSubmitDropdownVisible] = useState(false);
    const timerRef = useRef(null);
    const dropdownRef = useRef(null);

    // Handle mouse enter for desktop dropdown
    const handleMouseEnter = () => {
        if (window.innerWidth >= 1024) {
            setDropdownVisible(true);
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        }
    };

    // Handle mouse leave for desktop dropdown
    const handleMouseLeave = () => {
        if (window.innerWidth >= 1024) {
            timerRef.current = setTimeout(() => {
                setDropdownVisible(false);
            }, 500);
        }
    };

    // Handle click on mobile menu
    const handleClick = (event) => {
        event.preventDefault(); // Prevent default anchor click behavior
        if (window.innerWidth < 1024) {
            setMobileDropdownVisible(!mobileDropdownVisible);
        } else {
            setSubmitDropdownVisible(!submitDropdownVisible);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSubmitDropdownVisible(false);
                setMobileDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return (
        <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 flex justify-between items-center shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200 relative z-50">
            <div className="flex items-center">
                <a href="/" className="flex items-center">
                    <img src={logo} alt="DKTE Logo" className="h-8 w-auto mr-2" />
                </a>
                <span className="text-white text-lg">Ambar</span>
            </div>
            <div className="hidden lg:flex space-x-4">
                {links && links.map((link, index) => (
                    <div
                        key={index}
                        className="relative"
                        onMouseEnter={link.label === 'Submit' ? handleMouseEnter : null}
                        onMouseLeave={link.label === 'Submit' ? handleMouseLeave : null}
                    >
                        <a
                            href={link.label === 'Submit' ? '#' : link.url} // Prevent default link behavior for Submit
                            className={classNames(
                                'transition-colors duration-300 text-lg px-2 py-1 rounded-lg',
                                {
                                    'text-black hover:text-yellow-400': link.label === 'Submit',
                                    'hover:text-yellow-400': link.label !== 'Submit'
                                }
                            )}
                            onClick={link.label === 'Submit' ? handleClick : null}
                        >
                            {link.label}
                        </a>
                        {link.label === 'Submit' && dropdownVisible && (
                            <div
                                ref={dropdownRef}
                                className="absolute top-full left-0 mt-2 bg-white bg-opacity-80 text-black rounded-md shadow-lg z-50 transform scale-95 opacity-100 transition-all duration-300 ease-out backdrop-blur-lg border border-gray-200"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a
                                    href="/submit-article"
                                    className="block px-4 py-2 hover:bg-yellow-300 hover:text-black transition-colors duration-300 transform hover:scale-105 rounded-md"
                                >
                                    Article
                                </a>
                                <a
                                    href="/submit-image"
                                    className="block px-4 py-2 hover:bg-blue-400 hover:text-black transition-colors duration-300 transform hover:scale-105 rounded-md"
                                >
                                    Image
                                </a>
                                <a
                                    href="/submit-technical-article"
                                    className="block px-4 py-2 hover:bg-green-400 hover:text-black transition-colors duration-300 transform hover:scale-105 rounded-md"
                                >
                                    Technical Article
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="lg:hidden flex items-center relative">
                <button
                    className="text-white focus:outline-none"
                    onClick={() => setMobileDropdownVisible(!mobileDropdownVisible)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                {mobileDropdownVisible && (
                    <div ref={dropdownRef} className="absolute right-0 top-full mt-2 bg-white bg-opacity-80 text-black rounded-md shadow-lg z-50 transform scale-100 opacity-100 transition-all duration-300 ease-out backdrop-blur-lg border border-gray-200">
                        {links && links.map((link, index) => (
                            <div key={index} className="relative">
                                <a
                                    href={link.url}
                                    className="block px-4 py-2 hover:bg-yellow-300 hover:text-black transition-colors duration-300 transform hover:scale-105 rounded-md"
                                    onClick={(e) => {
                                        if (link.label === 'Submit') {
                                            e.preventDefault(); // Prevent default action for Submit
                                            setSubmitDropdownVisible(!submitDropdownVisible);
                                        }
                                    }}
                                >
                                    {link.label}
                                </a>
                                {link.label === 'Submit' && submitDropdownVisible && (
                                    <div
                                        className="absolute left-[-10rem] top-0 mt-2 bg-white bg-opacity-80 text-black rounded-md shadow-lg z-50 transform scale-100 opacity-100 transition-all duration-300 ease-out backdrop-blur-lg border border-gray-200"
                                    >
                                        <a
                                            href="/submit-article"
                                            className="block px-4 py-2 hover:bg-yellow-300 hover:text-black transition-colors duration-300 transform hover:scale-105 rounded-md"
                                        >
                                            Article
                                        </a>
                                        <a
                                            href="/submit-image"
                                            className="block px-4 py-2 hover:bg-blue-400 hover:text-black transition-colors duration-300 transform hover:scale-105 rounded-md"
                                        >
                                            Image
                                        </a>
                                        <a
                                            href="/submit-technical-article"
                                            className="block px-4 py-2 hover:bg-green-400 hover:text-black transition-colors duration-300 transform hover:scale-105 rounded-md"
                                        >
                                            Technical Article
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
