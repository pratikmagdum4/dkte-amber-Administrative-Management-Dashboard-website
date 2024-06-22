
import React, { useState } from 'react';

const AchievementsTable = ({ stdabroad, initialRows, columnHeaders, title, numberOfColumns, onSubmit }) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(rows);
    };

    const adjustTextareaHeight = (textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    const columnsToDisplay = columnHeaders.slice(0, numberOfColumns);

    return (
        <form onSubmit={handleSubmit} className="p-4">
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
                                <td key={header.key} className={`border border-zinc-400 px-4 py-2 ${stdabroad && header.key === 'srno' ? 'w-1/6' : stdabroad && header.key === 'info' ? 'w-5/6' : ''}`}>
                                   
                                        <textarea
                                            name={header.key}
                                            value={row[header.key]}
                                            onChange={(e) => handleChange(index, e)}
                                            className="w-full p-2 border border-zinc-300 rounded resize-none"
                                            rows="1"
                                            onInput={(e) => adjustTextareaHeight(e.target)}
                                            style={{ overflow: 'hidden' }}
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
            <button
                type="submit"
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
                Submit
            </button>
        </form>
    );
};

export default AchievementsTable;
