import React from 'react';

const PersonDetails = ({ person }) => {
    return (
        <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
            <div className="flex mb-6">
                <img
                    src={person.image}
                    alt={person.name}
                    className="w-32 h-32 rounded-full mr-6"
                />
                <div className="flex flex-col justify-center">
                    <h1 className="text-2xl font-bold">{person.name}</h1>
                    <p className="mt-2 text-gray-600">Branch: {person.branch}</p>
                    <p className="mt-2 text-gray-600">Contact: {person.contact}</p>
                    <p className="mt-2 text-gray-600">Email: {person.email}</p>
                </div>
            </div>
            <div>
                <textarea
                    className="w-full h-48 p-4 border border-gray-300 rounded-lg resize-none"
                    value={person.article}
                    readOnly
                />
            </div>
        </div>
    );
};

export default PersonDetails;
