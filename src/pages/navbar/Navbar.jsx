import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ links }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState('');
    const timerRef = useRef(null);

    const handleMouseEnter = (label) => {
        setActiveDropdown(label);
        setDropdownVisible(true);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setDropdownVisible(false);
            setActiveDropdown('');
        }, 5000);
    };

    const handleClick = (label) => {
        setActiveDropdown(label);
        setDropdownVisible(true);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setDropdownVisible(false);
            setActiveDropdown('');
        }, 5000);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    const renderDropdown = (label) => {
        return (
            <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg z-10">
                <a href={`/login/admin/home/${label.toLowerCase()}-article`} className="block px-4 py-2 hover:bg-gray-200">Article</a>
                <a href={`/login/admin/home/${label.toLowerCase()}-image`} className="block px-4 py-2 hover:bg-gray-200">Image</a>
                <a href={`/login/admin/home/${label.toLowerCase()}-technical-article`} className="block px-4 py-2 hover:bg-gray-200">Technical Article</a>
            </div>
        );
    };

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
                        onMouseEnter={['Submit', 'Verify', 'Display'].includes(link.label) ? () => handleMouseEnter(link.label) : null}
                        onMouseLeave={['Submit', 'Verify', 'Display'].includes(link.label) ? handleMouseLeave : null}
                        onClick={['Submit', 'Verify', 'Display'].includes(link.label) ? () => handleClick(link.label) : null}
                    >
                        <a
                            href={link.url}
                            className="hover:text-zinc-400"
                        >
                            
                            {link.label}
                        </a>
                        {dropdownVisible && activeDropdown === link.label && renderDropdown(link.label)}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
