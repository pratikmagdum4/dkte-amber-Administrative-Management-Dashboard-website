import React, { useState } from 'react';

const Dropdown2 = ({ label, options, onSelect, selected, disabled }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const onOptionClicked = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onClick={toggleDropdown}
                disabled={disabled}
            >
                {selected || label}
            </button>
            {isOpen && (
                <ul className="absolute w-full mt-2 bg-white rounded-md shadow-lg z-10">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => onOptionClicked(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown2;