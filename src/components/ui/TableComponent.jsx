import React, { useState } from 'react';

const AchievementsTable = ({ initialRows, columnHeaders, title, numberOfColumns }) => {
    const [rows, setRows] = useState(initialRows);

    const handleAddRow = () => {
        const newRow = columnHeaders.reduce((acc, header) => {
            acc[header.key] = '';
            return acc;
        }, {});
        setRows([...rows, newRow]);
    };

    const handleDeleteRow = (index) => {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newRows = [...rows];
        newRows[index][name] = value;
        setRows(newRows);
    };

    const columnsToDisplay = columnHeaders.slice(0, numberOfColumns);

    return (
        <div className="p-4">
            <h2 className="text-center font-bold text-xl mb-4">
                {title}
            </h2>
            <table className="min-w-full border-collapse border border-zinc-400">
                <thead>
                    <tr>
                        {columnsToDisplay.map(header => (
                            <th key={header.key} className="border border-zinc-400 px-4 py-2">{header.label}</th>
                        ))}
                        <th className="border border-zinc-400 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            {columnsToDisplay.map(header => (
                                <td key={header.key} className="border border-zinc-400 px-4 py-2">
                                    <input
                                        type="text"
                                        name={header.key}
                                        value={row[header.key]}
                                        onChange={(e) => handleChange(index, e)}
                                        className="w-full p-2 border border-zinc-300 rounded"
                                    />
                                </td>
                            ))}
                            <td className="border border-zinc-400 px-4 py-2 text-center">
                                <button
                                    type="button"
                                    onClick={() => handleDeleteRow(index)}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                type="button"
                onClick={handleAddRow}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Row
            </button>
        </div>
    );
};

export default AchievementsTable;
