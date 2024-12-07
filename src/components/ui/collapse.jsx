import React, { useState } from "react";

const CollapseDefault = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                {/* Brand */}
                <div className="text-xl font-bold">My Navbar</div>

                {/* Hamburger Menu */}
                <button
                    className="md:hidden block text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                {/* Navbar Links */}
                <div
                    className={`absolute md:static left-0 top-[70px] w-full md:w-auto bg-blue-600 md:flex md:items-center md:space-x-4 ${isMenuOpen ? "block" : "hidden"
                        }`}
                >
                    <a
                        href="#home"
                        className="block py-2 px-4 hover:bg-blue-700 rounded md:inline-block"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="block py-2 px-4 hover:bg-blue-700 rounded md:inline-block"
                    >
                        About
                    </a>

                    {/* Dropdown */}
                    <div className="relative group">
                        <button
                            className="block w-full md:w-auto py-2 px-4 hover:bg-blue-700 rounded flex items-center md:inline-block"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Services
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute md:static left-0 mt-2 md:mt-0 md:w-auto w-full bg-white text-black shadow-lg rounded z-10">
                                <a
                                    href="#web"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Web Development
                                </a>
                                <a
                                    href="#design"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Design
                                </a>

                                {/* Sub-dropdown */}
                                <div className="relative">
                                    <button
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
                                        onClick={() => setIsSubDropdownOpen(!isSubDropdownOpen)}
                                    >
                                        Marketing
                                        <svg
                                            className="w-4 h-4 ml-auto"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                    {isSubDropdownOpen && (
                                        <div className="absolute left-0 md:left-full top-0 mt-0 w-full md:w-48 bg-white text-black shadow-lg rounded z-20">
                                            <a
                                                href="#seo"
                                                className="block px-4 py-2 hover:bg-gray-200"
                                            >
                                                SEO
                                            </a>
                                            <a
                                                href="#content"
                                                className="block px-4 py-2 hover:bg-gray-200"
                                            >
                                                Content Writing
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <a
                        href="#contact"
                        className="block py-2 px-4 hover:bg-blue-700 rounded md:inline-block"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default CollapseDefault;
