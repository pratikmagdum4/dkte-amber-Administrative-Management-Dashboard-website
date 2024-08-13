import React from 'react';

const ClerkProgress = ({ title, totalRecords, filledRecords }) => {
    const progressPercentage = (filledRecords / totalRecords) * 100;

    return (
        <div className="p-4 border rounded-md shadow-sm">
            <h3 className="text-xl font-bold">{title}</h3>
            <p>Total Records Filled: {filledRecords}</p>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                    className="bg-blue-500 h-full"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            <p>{progressPercentage.toFixed(2)}% completed</p>
        </div>
    );
};

export default ClerkProgress;
