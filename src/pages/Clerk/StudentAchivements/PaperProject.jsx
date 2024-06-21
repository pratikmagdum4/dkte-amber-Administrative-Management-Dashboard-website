import React, { useState } from 'react';

const AchievementsTable2 = () => {
    const [rows, setRows] = useState([{ name: '', event: '', prize: '' }]);

    const handleAddRow = () => {
        setRows([...rows, { name: '', event: '', prize: '' }]);
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

    return (
        <div className="p-4">
            <h2 className="text-center font-bold text-xl mb-4">
                STUDENTS ACHIEVEMENTS IN PAPER/PROJECT PRESENTATION CONTESTS
            </h2>
            <table className="min-w-full border-collapse border border-zinc-400">
                <thead>
                    <tr>
                        <th className="border border-zinc-400 px-4 py-2">Name of the Student</th>
                        <th className="border border-zinc-400 px-4 py-2">Event</th>
                        <th className="border border-zinc-400 px-4 py-2">Prize</th>
                        <th className="border border-zinc-400 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td className="border border-zinc-400 px-4 py-2">
                                <input
                                    type="text"
                                    name="name"
                                    value={row.name}
                                    onChange={(e) => handleChange(index, e)}
                                    className="w-full p-2 border border-zinc-300 rounded"
                                />
                            </td>
                            <td className="border border-zinc-400 px-4 py-2">
                                <input
                                    type="text"
                                    name="event"
                                    value={row.event}
                                    onChange={(e) => handleChange(index, e)}
                                    className="w-full p-2 border border-zinc-300 rounded"
                                />
                            </td>
                            <td className="border border-zinc-400 px-4 py-2">
                                <input
                                    type="text"
                                    name="prize"
                                    value={row.prize}
                                    onChange={(e) => handleChange(index, e)}
                                    className="w-full p-2 border border-zinc-300 rounded"
                                />
                            </td>
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

export default AchievementsTable2;
