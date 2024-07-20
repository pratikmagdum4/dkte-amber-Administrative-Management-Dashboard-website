import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ links }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const timerRef = useRef(null);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setDropdownVisible(false);
        }, 5000);
    };

    const handleClick = () => {
        setDropdownVisible(true);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setDropdownVisible(false);
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
                        onMouseEnter={link.label === 'Submit' ? handleMouseEnter : null}
                        onMouseLeave={link.label === 'Submit' ? handleMouseLeave : null}
                        onClick={link.label === 'Submit' ? handleClick : null}
                    >
                        <a
                            href={link.url}
                            className="hover:text-zinc-400"
                        >
                            {link.label}
                        </a>
                        {link.label === 'Submit' && dropdownVisible && (
                            <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg z-10">
                                <a href="/submit-article" className="block px-4 py-2 hover:bg-gray-200">Article</a>
                                <a href="/submit-image" className="block px-4 py-2 hover:bg-gray-200">Image</a>
                                <a href="/submit-technical-article" className="block px-4 py-2 hover:bg-gray-200">Technical Article</a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
