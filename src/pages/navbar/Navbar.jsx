import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ links }) => {
    const [dropdownVisible, setDropdownVisible] = useState('');
    const timerRef = useRef(null);

    const handleMouseEnter = (label) => {
        setDropdownVisible(label);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setDropdownVisible('');
        }, 5000);
    };

    const handleClick = (label) => {
        setDropdownVisible(label);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setDropdownVisible('');
        }, 5000);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return (
        <nav className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <div className="bg-yellow-500 text-black font-bold px-2 py-1 mr-2">DKTE</div>
                <span className="text-white">Ambar</span>
            </div>
            <div className="flex space-x-4">
                {links && links.map((link, index) => (
                    <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(link.label)}
                    >
                        <a
                            href={link.url}
                            className="hover:text-zinc-400"
                        >
                            {link.label}
                        </a>
                        {link.label === 'Submit' && dropdownVisible === 'Submit' && (
                            <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg z-10">
                                <a href="/submit-article" className="block px-4 py-2 hover:bg-gray-200">Article</a>
                                <a href="/submit-image" className="block px-4 py-2 hover:bg-gray-200">Image</a>
                                <a href="/submit-technical-article" className="block px-4 py-2 hover:bg-gray-200">Technical Article</a>
                            </div>
                        )}
                        {link.label === 'Verify' && dropdownVisible === 'Verify' && (
                            <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg z-10">
                                <a href="/login/admin/home/verify-article" className="block px-4 py-2 hover:bg-gray-200">Article</a>
                                <a href="/login/admin/home/verify-image" className="block px-4 py-2 hover:bg-gray-200">Image</a>
                                <a href="/login/admin/home/verify-technical-article" className="block px-4 py-2 hover:bg-gray-200">Technical Article</a>
                            </div>
                        )}
                        {link.label === 'Display' && dropdownVisible === 'Display' && (
                            <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg z-10">
                                <a href="/login/admin/home/display-article" className="block px-4 py-2 hover:bg-gray-200">Article</a>
                                <a href="/login/admin/home/display-image" className="block px-4 py-2 hover:bg-gray-200">Image</a>
                                <a href="/login/admin/home/display-technical-article" className="block px-4 py-2 hover:bg-gray-200">Technical Article</a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
